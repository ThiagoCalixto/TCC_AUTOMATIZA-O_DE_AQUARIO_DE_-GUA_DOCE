import React, { createContext, useCallback, useState, useContext } from "react";
import { AsyncStorageSaveItem, AsyncStorageGetItem, AsyncStorageRemoveItem, AsyncStorageRemoveAll } from "../../utils/asyncStorage";

import api from "../api/index";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthState {
  token: string;
  name: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(name: string): void;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    
    let name;
    let token;
    
    const GetDatas = async () =>{
      name = await AsyncStorageGetItem("@TccAquarium:user");
      token = await AsyncStorageGetItem("@TccAquarium:token");
    }
    
    GetDatas();
    
    if (token && name) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, name: JSON.parse(name) };
    }

    return {} as AuthState;
  });

  const signOut = useCallback(async () => {
    await AsyncStorageRemoveAll()
    setData({} as AuthState);
  }, []);

  const signIn = async ({ email, password }: SignInCredentials) => {
    const response = await api.post("sessions", {
      email,
      password,
    });

    const { token, name } = response.data;
    await AsyncStorageSaveItem("@TccAquarium:user", JSON.stringify(name));
    await AsyncStorageSaveItem("@TccAquarium:token", token);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, name });
    
  };

  const updateUser = useCallback(
    async (name: string) => {
      await AsyncStorageSaveItem("@TccAquarium:user", JSON.stringify(name));

      setData({
        token: data.token,
         name,
      });
    },
    [setData, data.token]
  );

  return (
    <AuthContext.Provider
      value={{ name: data.name, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an authProvider");
  }

  return context;
}

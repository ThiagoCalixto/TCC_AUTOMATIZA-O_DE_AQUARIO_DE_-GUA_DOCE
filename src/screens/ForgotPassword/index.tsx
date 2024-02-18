import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { ActivityIndicator } from "react-native";

import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";

import { Container, Title, BackButton, Text } from "./styles";
import { UserToAuthenticate } from "../../services/GetUserToAuthenticate";
import { AsyncStorageGetItem, AsyncStorageSaveItem } from "../../utils/asyncStorage";

export function ForgotPassword() {
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserToAuthenticate>({} as UserToAuthenticate);
  const [code, setCode] = useState<string>('');
  
  const handleGoBack = () => {
    navigation.goBack();
  };
  
  const handleGetSavedUserData = async () => {
    const result = await AsyncStorageGetItem('@Guita:email_to_authenticate');
    
    if(result) {
      const parsedUserData = JSON.parse(result);
      setUser(parsedUserData);
    }
  };
  
  useEffect(() => {
    handleGetSavedUserData();
  }, []);
  
  const handleNavigateToResetPassword = async () => {
    await AsyncStorageSaveItem('@Guita:forgot_password_code', code);
    navigation.navigate('resetPassword')
  }
  
  return (
    <Container paddingTop={getStatusBarHeight() + 40}>
      <BackButton onPress={() => handleGoBack()} activeOpacity={0.7}>
        <MaterialIcons name="chevron-left" size={40} color={COLORS.WHITE_900} />
      </BackButton>
      
      <Title>
        Recuperação de senha
      </Title>
      <Text>
        Digite o código (6 dígitos) que foi enviado para {"\n"}
        o número para poder continuar
      </Text>
      
      <ActivityIndicator 
        animating={loading}
        color={COLORS.WHITE_900}
        size='large'
      />
      
      <Input
        placeholder="Digite aqui o código"
        type="secondary"
        autoCorrect={false}
        autoFocus
        maxLength={4}
        style={{marginTop: 20}}
      />
      
      <ButtonIcon
          type="secondary"
          title="Confirmar e continuar"
          icon="login"
          onPress={() => handleNavigateToResetPassword()}
        />
    </Container>
  );
}

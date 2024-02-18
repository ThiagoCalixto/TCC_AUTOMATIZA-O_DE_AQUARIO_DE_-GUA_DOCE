import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { AsyncStorageGetItem } from "../../utils/asyncStorage";

import { Container, Title, BackButton, Text } from "./styles";

export function ResetPassword() {
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  
  const [loading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  
  const handleGoBack = () => {
    navigation.goBack();
  };
  
  const handleGetSavedCode = async () => {
    const result = await AsyncStorageGetItem('@Guita:forgot_password_code');
    
    if(result) {
      const parsedCode = JSON.parse(result);
      setToken(parsedCode);
    }
  };
  
  useEffect(() => {
    handleGetSavedCode();
  }, []);
  
  const handleResetPassword = async () => {
    setLoading(true);
    try {
      // await ResetPasswordService(
      //   token,
      //   password,
      //   passwordConfirm
      // );
      setLoading(false);
      navigation.navigate('confirmationPassword');
    } catch (error:any) {
      setLoading(false);
      // console.log(error.response.request._response);
      const err = JSON.parse(error.response.request._response);
      if(err.message && err.code !== 500){
        Alert.alert('Atenção',`${err.message}`);
      } else {
        Alert.alert('Atenção','An error occurred while reseting the password, try again');
      }
    }
  };
  
  return (
    <Container paddingTop={getStatusBarHeight() + 40}>
      <BackButton onPress={() => handleGoBack()} activeOpacity={0.7}>
        <MaterialIcons name="chevron-left" size={40} color={COLORS.WHITE_900} />
      </BackButton>
      
      <Title>
        Recuperação de senha
      </Title>
      <Text>
        Escolha a sua nova senha de 4 dígitos para poder logar na plataforma
      </Text>
      
      <ActivityIndicator 
        animating={loading}
        color={COLORS.WHITE_900}
        size='large'
      />
      
      <Input
        placeholder="Digite aqui a nova senha"
        type="secondary"
        autoCorrect={false}
        autoFocus
        secureTextEntry
        autoCapitalize="none"
        value={password}
        maxLength={4}
        style={{marginTop: 20}}
      />
      <Input
        placeholder="Confirmar a senha"
        type="secondary"
        autoCorrect={false}
        secureTextEntry
        autoCapitalize="none"
        maxLength={4}
        value={passwordConfirm}
        style={{marginTop: 20}}
      />
      
      <ButtonIcon
          type="secondary"
          title="Confirmar"
          icon="login"
          onPress={() => handleResetPassword()}
          activeOpacity={0.7}
        />
    </Container>
  );
}

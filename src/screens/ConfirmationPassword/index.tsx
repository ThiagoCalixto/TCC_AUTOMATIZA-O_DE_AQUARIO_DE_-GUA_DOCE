import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ButtonIcon } from "@components/ButtonIcon";

import { Container, Title, Text, ImageContainer } from "./styles";


export function ConfirmationPassword() {
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  
  return (
    <Container paddingTop={getStatusBarHeight() + 40}>
      <ImageContainer>
        <MaterialCommunityIcons name="lock-check" size={100} color={COLORS.SUCCESS_900}/>
      </ImageContainer>
      
      <Title>
        Senha Alterada com sucesso
      </Title>
      <Text>
        Sua nova senha foi alterada com sucesso {"\n"}
        clique em voltar para login para entrar na plataforma
      </Text>
      
      
      <ButtonIcon
          type="secondary"
          title="Voltar para login"
          icon="login"
          onPress={() => navigation.navigate('pinConfirmation')}
          style={{marginTop:'auto'}}
          activeOpacity={0.7}
        />
    </Container>
  );
}

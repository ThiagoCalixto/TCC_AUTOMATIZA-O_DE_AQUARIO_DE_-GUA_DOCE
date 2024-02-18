import React, { useCallback } from "react";
import { Image } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { ButtonIcon } from "@components/ButtonIcon";

import Banner from "../../assets/banner1.png";
import { useCurrentLocationContext } from "../../contexts/CurrentLocation";
import { GetCurrentLocation } from "../../services/currentLocation";

import {
  Container,
  ImageContainer,
  Title,
  Content,
  Text,
  SignUpButton,
} from "./styles";


export function WelCome() {
  const navigation = useNavigation();
  const { handleSetCurrentLocation } = useCurrentLocationContext();
  
  useFocusEffect(useCallback(() => {
    const fecthLocation = async () => {
      const currentLocation = await GetCurrentLocation();
      handleSetCurrentLocation(currentLocation);
    };
    
    fecthLocation();
  },[]))
  
  return (
    <Container>
      <ImageContainer>
        <Image source={Banner} />
      </ImageContainer>

      <Content>
        <Title>
        Conecte-se, controle e organize o seu aquário
        </Title>
        <ButtonIcon
          type="primary"
          title="Entrar na plataforma"
          icon="login"
          onPress={() => navigation.navigate("signin")}
        />
        <SignUpButton onPress={() => navigation.navigate("signup")} activeOpacity={0.7}>
          <Text>Criar uma conta agora</Text>
        </SignUpButton>
      </Content>
    </Container>
  );
}

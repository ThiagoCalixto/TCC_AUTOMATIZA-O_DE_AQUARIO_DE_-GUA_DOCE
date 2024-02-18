import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";

import { Input } from "@components/Input";

import {
  Container,
  ProfileContainer,
  BackButton,
  Content,
  Info,
  Text,
  Title,
} from "./styles";


interface PetsProps {
  name: string;
}
export function MyPetDetails() {
  const navigation = useNavigation();
  const { COLORS } = useTheme();

  const [pets, setPets] = useState<PetsProps[]>([]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container paddingTop={getStatusBarHeight() + 40}>
      <BackButton onPress={() => handleGoBack()} activeOpacity={0.7}>
        <MaterialIcons name="chevron-left" size={40} color={COLORS.WHITE_900} />
      </BackButton>

      <Content>
        <Title>Algumas informações sobre o peixe</Title>
        
        <ProfileContainer>
          <Info>
            <Text>Ph 9.6</Text>
          </Info>
          <Info>
            <Text>Temperatua 28</Text>
          </Info>
          <Info>
            <Text>Luz fraca</Text>
          </Info>
          <Info>
            <Text>Luz fraca</Text>
          </Info>
        </ProfileContainer>
      </Content>
    </Container>
  );
}

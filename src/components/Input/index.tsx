import React from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import { Container, MainContainer, Text, TypeProps, ContainerFlex } from "./styles";

type Props = TextInputProps & {
  type?: TypeProps;
  borderColor?: string;
  label?: string;
  isRequired?: boolean;
};

export function Input({ type = "primary",label, borderColor, isRequired,...rest }: Props) {
  const { COLORS } = useTheme();
  
  return (
    <MainContainer>
      <ContainerFlex>
        { label && <Text type={type}>{label}</Text> }
        { isRequired && <Text style={{color: COLORS.ERROR}}> *</Text>}
      </ContainerFlex>
      <Container type={type} borderColor={borderColor} {...rest} />
    </MainContainer>
  );
}

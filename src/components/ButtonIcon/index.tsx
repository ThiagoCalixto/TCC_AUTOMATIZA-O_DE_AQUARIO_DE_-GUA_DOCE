import React from "react";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { Container, TypeProps, Title, IconContainer } from "./styles";
import { IconsTypes } from "../../utils/mockIcons";

type Props = TouchableOpacityProps & {
  type?: TypeProps;
  title: string;
  icon: IconsTypes;
};

export function ButtonIcon({ type = "primary", title, icon, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container type={type} {...rest}>
      <IconContainer type={type}>
        <MaterialIcons name={icon} size={30} color={type === "primary" ? COLORS.WHITE_900: COLORS.TEXT} />
      </IconContainer>
      <Title type={type}>{title}</Title>
    </Container>
  );
}

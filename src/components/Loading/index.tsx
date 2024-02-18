import React from "react";
import Spinner from "react-native-loading-spinner-overlay";

import { Container, Loader } from "./styles";
import { useTheme } from "styled-components";

type LoadingType = "Gerando" | "Alterando" | "Guardando" | "Carregando";

interface LoadingProps {
  type: LoadingType;
  isActive: boolean;
}

export function Loading({
  type = "Carregando",
  isActive = true,
}: LoadingProps) {
  const { COLORS } = useTheme();
  return (
    <Container>
      <Loader>
        <Spinner
          visible={isActive}
          textContent={`${String(type)}...`}
          textStyle={{ color: COLORS.BUTTON, textAlign: "center" }}
          color={COLORS.BUTTON}
        />
      </Loader>
    </Container>
  );
}

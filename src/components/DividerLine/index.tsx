import React from "react";

import { Container, SemiTitleProps } from "./styles";

export function DividerLine({ isMenuOption, ...rest }: SemiTitleProps) {
  return <Container isMenuOption={isMenuOption} {...rest} />;
}

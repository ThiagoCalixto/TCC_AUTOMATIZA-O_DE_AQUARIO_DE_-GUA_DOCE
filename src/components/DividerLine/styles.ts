import styled from "styled-components/native";

export type SemiTitleProps = {
  isMenuOption?: boolean;
};

export const Container = styled.View<SemiTitleProps>`
width: ${({ isMenuOption }) => (isMenuOption ? "100%" : "1px")};
margin: ${({ isMenuOption }) => (isMenuOption ? "24px" : "0px")};
background-color: ${({ theme }) => theme.COLORS.SHAPE}
height: ${({ isMenuOption }) => (isMenuOption ? "1px" : "40px")};
align-items: center;
justify-content: center;
margin: 10px auto;
`;

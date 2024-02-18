import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export type TypeProps = "primary" | "secondary";

type Props = {
  type?: TypeProps;
  borderColor?: string;
};

export const Container = styled(TextInput).attrs<Props>(({ theme, type }) => ({
  placeholderTextColor: theme.COLORS.GRAY_900,
}))<Props>`
  width: 100%;
  height: 56px;
  border-radius: 5px;
  font-size: 14px;
  padding: 7px 0;
  padding-left: 20px;
  margin-bottom: 16px;
  font-weight: 600;

  ${({ theme, type, borderColor }) => css`
    font-family: ${theme.FONTS.TITLE};
    background-color: ${theme.COLORS.PRIMARY_700};
    border: 1px solid ${borderColor ? borderColor : theme.COLORS.PRIMARY_700};
    color: ${type === "primary" ? theme.COLORS.TEXT : theme.COLORS.GRAY};
  `}
`;

export const MainContainer = styled.View`
  width: 100%;
`;

export const ContainerFlex = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Text = styled.Text<Props>`
   font-size: 14px;
   font-weight: 600;
   margin-bottom: 5px;
  
  ${({ theme, type }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: ${type === "primary" ? theme.COLORS.PRIMARY_900 : theme.COLORS.GRAY};
  `}
`;
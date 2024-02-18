import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  paddingTop?: number;
};

export const Container = styled<any>(LinearGradient).attrs<Props>(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
}))`
  flex: 1;
  padding: 0 30px;
  padding-bottom: 60px;
  
  ${({ paddingTop }) => css`
    padding-top: ${paddingTop ? paddingTop + "px" : "40px"};
  `}
`;

export const Title = styled.Text`
  align-items: center;
  text-align: center;
  line-height: 35px;
  margin-top: 50px;
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.WHITE_800};
  font-size: 25px;
`;

export const Text = styled.Text`
  align-items: center;
  text-align: center;
  line-height: 20px;
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.WHITE_800};
  font-size: 15px;
`;

export const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
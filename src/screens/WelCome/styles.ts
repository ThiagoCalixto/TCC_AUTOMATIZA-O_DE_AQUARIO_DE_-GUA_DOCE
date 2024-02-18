import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  maxHeight?: number;
  paddingTop?: number;
};

export const Container = styled<any>(LinearGradient).attrs<Props>(
  ({ theme }) => ({
    colors: theme.COLORS.GRADIENT,
  })
)<Props>`
  flex: 1;
  width: 100%;
  /* padding: 0 24px; */
  /* align-items: center; */
  ${({ maxHeight, paddingTop, theme }) => css`
    height: ${maxHeight ? maxHeight + "px" : "250px"};
    padding-top: ${paddingTop ? paddingTop + "px" : "45px"};
  `}
`;

export const Content = styled.View`
  width: 100%
  height: 100%;
  align-items: center;
  flex-direction: column;
  padding: 0 30px;
`;

export const ImageContainer = styled.View`
  margin-top: 40px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  align-items: center;
  text-align: center;
  line-height: 35px;
  font-family: ${({ theme }) => theme.FONTS.HYPER_TITLE};
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-size: 31px;
`;

export const Text = styled.Text`
  align-items: center;
  text-align: center;
  /* line-height: 35px; */
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.WHITE_900};
  font-size: 16px;
`;

export const SignUpButton = styled.TouchableOpacity`
  margin-top: 30px;

  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

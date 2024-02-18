import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  paddingTop?: number;
};

export const Container = styled<any>(LinearGradient).attrs<Props>(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
}))`
  flex: 1;
  height: 100%;
  position: relative;
  align-items: center;
  
  ${({ paddingTop }) => css`
    padding-top: ${paddingTop ? paddingTop + "px" : "40px"};
  `}
`;

export const ButtonContainer = styled.View`
  width:100%;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Content = styled.View`
  width: 100%
  height: 100%;
  align-items: center;
  flex-direction: column;
`;

export const ContentContainer = styled.View`
  width: 100%
  height: 100%;
  align-items: center;
  flex-direction: column;
  padding: 0 30px;
  
  position: absolute;
  top: 28%;
`;

export const ImageContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const PhoneContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  align-items: center;
  text-align: center;
  line-height: 35px;
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.WHITE_800};
  font-size: 30px;
`;

export const Text = styled.Text`
  align-items: center;
  text-align: center;
  /* line-height: 35px; */
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: 16px;
`;
export const TextError = styled.Text`
  text-align: left;
  margin-right: auto;
  margin-top: -5px;
  margin-bottom: 5px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.ERROR};
  font-size: 12px;
`;

export const SignUpButton = styled.TouchableOpacity`
  margin-top: 30px;
  margin-left: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const BackButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: 15px;
`;
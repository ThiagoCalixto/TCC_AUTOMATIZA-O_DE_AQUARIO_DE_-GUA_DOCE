import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

interface ContainerProps {
  paddingTop?: number;
}

type Props = {
  paddingTop?: number;
};

export const Container = styled<any>(LinearGradient).attrs<Props>(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
}))`
  flex: 1;
  align-items: center;
  
  ${({ paddingTop }) => css`
    padding-top: ${paddingTop ? paddingTop + "px" : "40px"};
  `}
`;

export const UploadButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  background-color: ${({ theme }) => theme.COLORS.BUTTON};
  padding: 10px;
  border-radius: 8px;
`;

export const Content = styled.View`
  width: 100%
  height: 100%;
  align-items: center;
  flex-direction: column;
  padding: 0 30px;
`;

export const BackButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: 15px;
`;

export const Title = styled.Text`
  align-items: center;
  text-align: center;
  line-height: 35px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-size: 18px;
`;

export const Text = styled.Text`
  align-items: center;
  text-align: center;
  line-height: 25px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.GRAY};
  font-size: 14px;
  margin-left: 5px;
`;

export const Profile = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_600};
`;

export const ImageProfile = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const FormContent = styled.View<ContainerProps>`
  width: 100%;
  margin-top: 30px;
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

export const ProfileContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  border-radius: 8px;
  padding: 20px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_700};
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_600};
`;

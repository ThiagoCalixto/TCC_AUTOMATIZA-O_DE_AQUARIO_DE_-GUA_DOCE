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

export const Info = styled.View`
  align-items: center;
  padding: 5px 15px;
  margin-bottom: 10px;
  /* margin-right: 10px; */
  border-radius: 30px;
  background-color: ${({ theme }) => theme.COLORS.BUTTON};
`;

export const Title = styled.Text`
  align-items: center;
  text-align: center;
  line-height: 35px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-size: 18px;
  margin-bottom: 15px;
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

export const ProfileContainer = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_700};
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_600};
`;

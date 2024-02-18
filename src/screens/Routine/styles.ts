import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

interface ContainerProps {
  paddingTop?: number;
}

type Props = {
  paddingTop?: number;
};

type ActionBtnProps = {
  isSelected?: boolean;
}

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

export const InputGroup = styled.View`
  width: 175px;
`;
export const FormGroup = styled.View`
  width: 100%;
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

export const ActionsContainer = styled.View`
  width: 100%;
  margin-top: 20px;
  justify-content: space-between;
  flex-direction: row;
`;


export const ActionButton = styled.View<ActionBtnProps>`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 165px;
  height: 70px;
  border-radius: 8px;
  background: ${({ theme, isSelected }) => isSelected ? theme.COLORS.PRIMARY_600 : theme.COLORS.PRIMARY_700};
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_600};
`;

export const FormContent = styled.View<ContainerProps>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
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
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_700};
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_600};
`;

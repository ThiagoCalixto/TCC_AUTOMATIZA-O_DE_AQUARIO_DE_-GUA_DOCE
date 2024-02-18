import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

type SemiTitleProps = {
  isMenuOption?: boolean;
  color?: string;
};

type Props = {
  paddingTop?: number;
};

type ActionBtnProps = {
  isOn?: boolean;
}

export const Container = styled<any>(LinearGradient).attrs<Props>(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
}))`
  flex: 1;
  position: relative;
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

export const ProfileContainer = styled.View`
  padding-top: 20px;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.Text`
  align-items: center;
  text-align: center;
  line-height: 35px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-size: 18px;
`;

export const SemiTitle = styled.Text<SemiTitleProps>`
  align-items: center;
  text-align: center;
  /* line-height: 35px; */
  font-family: ${({ theme }) => theme.FONTS.SEMI_TITLE};
  color: ${({ theme, isMenuOption, color }) =>
    color ? color : isMenuOption ? theme.COLORS.TEXT : theme.COLORS.TITLE};
  font-size: 16px;
  margin-top: ${({ isMenuOption }) => (isMenuOption ? "5px" : "0px")};
`;


export const Text = styled.Text`
  align-items: center;
  text-align: center;
  line-height: 35px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.GRAY};
  font-size: 14px;
  font-weight: bold;
`;

export const Profile = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_600};
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_700};
`;

export const ImageProfile = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const BalanceContainer = styled.View`
  width: 100%;
`;

export const BalanceContent = styled.View`
  width: 100%;
  min-height: 150px;
  border-radius: 8px;
  margin-top: 30px;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_600};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_700};
  padding: 20px;
`;

export const Balance = styled.View`
  align-items: flex-start;
`;

export const DividerLine = styled.View<SemiTitleProps>`
  width: ${({ isMenuOption }) => (isMenuOption ? "100%" : "1px")};
  margin: ${({ isMenuOption }) => (isMenuOption ? "24px" : "0px")};
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_700}
  height: ${({ isMenuOption }) => (isMenuOption ? "1px" : "40px")};
`;

export const MenuContainer = styled.SafeAreaView`
  width: 100%;
  height: 130px;
  margin-top:40px;
`;

export const MenuContent = styled.ScrollView`
  width: 100%;
`;

export const IconContainer = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_600};
`;

export const Option = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  width: 120px;
  height: 130px;
  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.PRIMARY_700};
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_600};
`;

export const ActionsContainer = styled.View`
  width: 100%;
  margin-top: 20px;
  flex-direction: row;
`;


export const ActionButton = styled.TouchableOpacity<ActionBtnProps>`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 165px;
  height: 70px;
  margin-right: 30px;
  border-radius: 8px;
  background: ${({ theme, isOn }) => isOn ? theme.COLORS.PRIMARY_600 : theme.COLORS.PRIMARY_700};
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_600};
`;
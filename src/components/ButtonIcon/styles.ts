import styled, { css } from "styled-components/native";

export type TypeProps = "primary" | "secondary";

type Props = {
  type: TypeProps;
};

export const Container = styled.TouchableOpacity<Props>`
  flex: 1;
  width: 100%
  max-height: 56px;
  min-height: 56px;
  border-radius: 5px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  /* padding: 10px; */
  margin-top: 80px;
  background-color: ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.BUTTON : theme.COLORS.BACKGROUND_BUTTON};

  border: 1px solid ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.BUTTON : theme.COLORS.BORDER};
`;

export const IconContainer = styled.View<Props>`
  width: 60px;
  height: 100%;
  align-items: center;
  justify-content: center;

  border-right-width: 1px;

  border-right-color: ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.GRAY : theme.COLORS.TEXT};
`;

export const Title = styled.Text<Props>`
  font-size: 14px;
  flex: 1;
  text-align: center;

  ${({ theme, type }) => css`
    color: ${type === "primary"
      ? theme.COLORS.WHITE_900
      : theme.COLORS.TEXT};
    font-family: ${theme.FONTS.SEMI_TITLE};
  `}
`;

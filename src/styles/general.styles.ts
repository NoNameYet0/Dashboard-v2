import { css } from "styled-components";

export const CenteredFlexContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenteredColFlexContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainBgColor = css`
  background-color: ${({ theme }) => theme.colors["bg-primary"]};
`;

export const SeconderyBgColor = css`
  background-color: ${({ theme }) => theme.colors["bg-secondary"]};
`;

export const MainContentPadding = css`
  padding: 2em;
`;

export const MediumBold = css`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

export const Bold = css`
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export const MediumFontSize = css`
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
`;

export const LargeFontSize = css`
  font-size: ${({ theme }) => theme.typography.fontSize.large};
`;

export const XLargeFontSize = css`
  font-size: ${({ theme }) => theme.typography.fontSize.xlarge};
`;

export const XXLargeFontSize = css`
  font-size: ${({ theme }) => theme.typography.fontSize.xxlarge};
`;

export const XXXLargeFontSize = css`
  font-size: ${({ theme }) => theme.typography.fontSize.xxxlarge};
`;

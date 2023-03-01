import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const StyledButton = styled.button`
  cursor: pointer;
  line-height: 140%;
  text-align: center;
  letter-spacing: 0.02em;
  font-size: 19px;
  color: #404146;
  color: ${appTheme.light.colors.font200};
  padding: 24px 56px;
  border-radius: 40px;
  border: solid 1px transparent;
  background: ${appTheme.light.colors.ctaBg};
  box-shadow: ${appTheme.light.colors.ctaShadow};
  background-origin: border-box;
  background-clip: content-box, border-box;
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font200};
    background: ${appTheme.dark.colors.ctaBg};
    box-shadow: ${appTheme.dark.colors.ctaShadow};
  }
  &:hover {
    cursor: pointer;
    margin-top: -2px;
    margin-left: -2px;
    border: solid 2px transparent;
  }

  ${media.xlg} {
    letter-spacing: 0.01em;
    font-size: 14px;
    padding: 24px 40px;
  }
  ${media.lg} {
    padding: 20px 40px;
  }
  ${media.smd} {
    font-size: 12px;
    padding: 16px 24px;
  }
`;

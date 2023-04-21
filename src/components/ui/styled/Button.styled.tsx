import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const StyledButton = styled.button<{ color?: string }>`
  --bgColor: ${appTheme.light.colors.ctaBg};
  --borderColor: ${({ color }) => (!!color ? color : 'transparent')};
  position: relative;
  height: fit-content;
  cursor: pointer;
  line-height: 100%;
  text-align: center;
  letter-spacing: 0.02em;
  font-size: 19px;
  color: ${appTheme.light.colors.font200};
  border: unset;
  padding: 0px 56px;
  height: 75px;

  border-radius: 40px;
  background-color: transparent;

  &:before {
    background: var(--bgColor);
    background-origin: border-box;
    background-clip: content-box, border-box;
    position: absolute;
    border: solid 1px ${({ color }) => (!!color ? color : 'transparent')};
    content: ' ';
    display: block;
    border-radius: 40px;
    width: 99%;
    height: 100%;
    z-index: -1;
    top: 0;
    left: 0;
    box-shadow: 0px 4px 4px ${appTheme.light.colors.buttonShadow};
  }

  &:hover {
    cursor: pointer;
    &:before {
      border: solid 2px ${({ color }) => (!!color ? color : 'transparent')};
      margin-left: -1px;
      margin-top: -1px;
    }
  }

  ${media.brp1792} {
    letter-spacing: 0.01em;
    font-size: 14px;
    padding: 0px 40px;
    height: 64px;
  }
  ${media.brp1440} {
    height: 64px;
    padding: 0px 40px;
  }
  ${media.brp1280} {
    height: 54px;
  }
  ${media.brp1024} {
    font-size: 12px;
    padding: 0px 24px;
    height: 44px;
  }

  ${tmSelectors.dark} {
    &:before {
      box-shadow: 0px 4px 4px ${appTheme.dark.colors.buttonShadow};
    }
    background-color: transparent;
    color: ${appTheme.dark.colors.font200};
    --bgColor: ${appTheme.dark.colors.ctaBg};
  }
`;

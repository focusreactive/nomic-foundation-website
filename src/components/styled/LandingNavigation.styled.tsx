import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../themes';

export const Navigation = styled.nav`
  width: 100%;
  height: 96px;
  box-sizing: border-box;
  transition: all ease-in-out 0.5s;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.brp1024} {
    height: 80px;
  }
`;

export const BlurBg = css`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
`;

export const ControlsContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${appTheme.light.colors.transparent};
  box-sizing: border-box;
  z-index: 1;
  margin: 0 auto;
  max-width: 1440px;
  ${media.brp1792} {
    max-width: 1200px;
  }
  ${media.brp1440} {
    max-width: 1044px;
  }
  ${media.brp1280} {
    max-width: 896px;
  }
  ${media.brp1024} {
    max-width: 672px;
  }
  ${media.brp768} {
    max-width: 452px;
  }
  ${media.brp500} {
    max-width: 380px;
  }
  ${media.brp428} {
    max-width: 312px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  box-sizing: border-box;
  background-color: ${appTheme.light.colors.transparent};
  border: none;
  cursor: pointer;
  z-index: 100;
  ${media.brp1024} {
    & svg {
      height: 32px;
      margin-left: -25%;
    }
  }
`;

export const HamburgerWrapper = styled.div`
  display: none;
  cursor: pointer;
  z-index: 100;
  & svg {
    stroke: ${appTheme.light.colors.font50};
  }
  &:hover svg {
    fill: ${appTheme.light.colors.hamburger};
  }
  ${tmSelectors.dark} {
    &:hover svg {
      fill: ${appTheme.dark.colors.hamburger};
    }
  }
  ${media.brp1024} {
    display: block;
  }
`;

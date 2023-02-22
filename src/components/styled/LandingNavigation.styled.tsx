import { styled } from 'linaria/react';
import { appTheme, media, tmSelectors } from '../../themes';

export const Navigation = styled.nav`
  width: 100%;
  height: 96px;
  box-sizing: border-box;
  transition: all ease-in-out 0.5s;
  background-color: ${appTheme.light.colors.transparent};
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 120px;
  ${media.smd} {
    padding: 0 56px;
  }
  ${media.sm} {
    padding: 0 48px;
  }
  ${media.xs} {
    padding: 0 24px;
  }
`;

export const ControlsContainer = styled.section`
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${appTheme.light.colors.transparent};
  box-sizing: border-box;
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
`;

export const HamburgerWrapper = styled.div`
  display: none;
  cursor: pointer;
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
  ${media.smd} {
    display: block;
  }
`;

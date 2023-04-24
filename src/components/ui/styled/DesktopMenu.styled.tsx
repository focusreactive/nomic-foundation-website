import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const Header = styled.header<{ backgroundOpacity: number }>`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 199;
  margin-top: 0;
  transition: all 0.25s ease-in-out;
  background: ${appTheme.light.colors.transparent};

  &.hidden {
    margin-top: -100%;
  }

  & .blur {
    background: ${appTheme.light.colors.navbarBlur};

    backdrop-filter: blur(9px);
    mix-blend-mode: normal;
    opacity: ${({ backgroundOpacity }) => backgroundOpacity};
  }

  ${tmSelectors.dark} {
    & .blur {
      background: ${appTheme.dark.colors.navbarBlur};
      backdrop-filter: blur(9px);
      mix-blend-mode: normal;
    }
  }
`;

export const HeaderBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const DesktopMenuContainer = styled.menu`
  display: flex;
  align-items: center;

  ${media.brp1024} {
    display: none;
  }
`;

export const MenuItemsContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin-right: 64px;
`;

export const MenuItem = styled.li`
  font-size: 14px;
  line-height: 100%;
  text-align: center;
  letter-spacing: 0.1em;
  color: ${appTheme.light.colors.font50};
  margin-right: 32px;
  white-space: nowrap;
  &:last-child {
    margin-right: unset;
  }
  &:hover {
    color: ${appTheme.light.colors.font100};
  }
  ${tmSelectors.dark} {
    &:hover {
      color: ${appTheme.dark.colors.font100};
    }
  }
`;

export const SocialsContainer = styled.section`
  display: flex;
  align-items: center;
  & a {
    margin-right: 8px;
    &:last-child {
      margin-right: unset;
    }
  }
`;

export const SocialItem = styled.div`
  font-size: 0px;
  & svg {
    fill: ${appTheme.light.colors.font50};
  }
  &:hover svg {
    fill: ${appTheme.light.colors.font100};
  }
  ${tmSelectors.dark} {
    &:hover svg {
      fill: ${appTheme.dark.colors.font100};
    }
  }
  ${media.brp1024} {
    & svg {
      width: 32px;
      height: 32px;
    }
  }
`;

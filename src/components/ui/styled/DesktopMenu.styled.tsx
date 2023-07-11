import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const Header = styled.header`
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 199;
  background: ${appTheme.light.colors.transparent};
  transition: all 0.4s linear;

  &.fixed {
    position: fixed;
    transform: translateY(calc((var(--header-height) + var(--top-banner-height)) * -1));

    & .blur {
      opacity: 1;
    }

    &.visible-header {
      transform: translateY(calc(var(--top-banner-height) * -1));
    }

    &.visible-top-bar {
      transform: translateY(0);
    }
  }
  
  &.disable-animation {
    transition: none;
  }

  & .blur {
    background: ${appTheme.light.colors.navbarBlur};
    transition: all 0.4s linear;
    backdrop-filter: blur(9px);
    mix-blend-mode: normal;
    opacity: 0;
  }

  ${tmSelectors.dark} {
    & .blur {
      background: ${appTheme.dark.colors.navbarBlur};
      backdrop-filter: blur(9px);
      mix-blend-mode: normal;
    }
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: calc(var(--header-height) + var(--top-banner-height));
  margin-bottom: calc((var(--header-height) + var(--top-banner-height)) * -1);
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

  ${media.brp1280} {
    margin-right: 40px;
  }
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

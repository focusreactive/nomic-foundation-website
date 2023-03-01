import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const MobileMenuContainer = styled.section<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: min(100%, 360px);
  height: calc(100vh - 46px);
  top: 46px;
  position: absolute;
  transition: all 0.25s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? '0px' : '-120%')};
  background: ${appTheme.light.colors.mobileMenuBackground};
  z-index: -1;
  ${tmSelectors.dark} {
    background: ${appTheme.dark.colors.mobileMenuBackground};
  }
  ${media.smd} {
    display: flex;
  }
`;

export const MobileMenuItemsList = styled.ul`
  list-style-type: none;
  padding: 114px 24px 0 32px;
  display: flex;
  flex-direction: column;
`;

export const MobileMenuItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 23px;
  line-height: 150%;
  letter-spacing: 0.03em;
  color: ${appTheme.light.colors.font50};
  padding: 10px 0;
  margin-bottom: 2px;
  &:last-child {
    margin-bottom: unset;
  }
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font50};
  }
  & svg {
    stroke: ${appTheme.light.colors.font50};
    ${tmSelectors.dark} {
      stroke: ${appTheme.dark.colors.font50};
    }
  }
  &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: ' ';
    height: 1px;
    background: ${appTheme.light.colors.menuItemActive};
    width: 0;
    ${tmSelectors.dark} {
      background: ${appTheme.dark.colors.menuItemActive};
    }
  }
  &.active {
    &:after {
      width: 100%;
    }
  }
`;

export const MobileMenuFooter = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px 30px;
`;

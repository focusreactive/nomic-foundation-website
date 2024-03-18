import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const MobileMenuContainer = styled.section<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: min(100%, 412px);
  height: calc(100vh - 126px);
  top: 0;
  position: absolute;
  transition: all 0.25s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? '0px' : '-120%')};
  background: ${appTheme.light.colors.mobileMenuBackground};
  ${tmSelectors.dark} {
    background: ${appTheme.dark.colors.mobileMenuBackground};
  }
  ${media.brp1024} {
    display: flex;
  }
  ${media.brp768} {
    width: 100%;
  }
  .fill & {
    height: calc(100vh - 76px);
  }
`;

export const MobileMenuContent = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const MobileMenuItemsList = styled.ul`
  list-style-type: none;
  padding: 134px 24px 0 32px;
  display: flex;
  flex-direction: column;
  ${media.brp768} {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const MobileMenuItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 23px;
  line-height: 150%;
  letter-spacing: 0.03em;
  color: ${appTheme.light.colors.font250};
  padding: 10px 0;
  margin-bottom: 2px;
  & a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    & svg {
      margin-left: 10px;
      margin-bottom: -4px;
    }
  }
  &:last-child {
    margin-bottom: unset;
  }
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font250};
  }
  & svg {
    stroke: ${appTheme.light.colors.font250};
    ${tmSelectors.dark} {
      stroke: ${appTheme.dark.colors.font250};
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
  padding: 0 24px 46px;
  ${media.brp768} {
    padding: 0 0 32px;
  }
`;

import { styled } from 'linaria/react';
import { appTheme, tmSelectors } from '../../themes';

export const ThemeSwitcherContainer = styled.div`
  --itemSize: 24px;
  display: flex;
  align-items: center;
  width: calc(var(--itemSize) * 2);
  height: var(--itemSize);
  position: relative;
  cursor: pointer;
`;

export const ThemeSwitcherItem = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease-in-out;

  &.light {
    background-color: unset;
    ${tmSelectors.dark} {
      background-color: ${appTheme.light.colors.themeBg};
    }
  }

  &.dark {
    background-color: ${appTheme.dark.colors.themeBg};
    ${tmSelectors.dark} {
      background-color: unset;
    }
  }
`;

export const ActiveThemeIndicator = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid;
  border-color: ${appTheme.light.colors.themeIndicator};
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.25s;

  ${tmSelectors.dark} {
    transform: translateX(24px);
    border-color: ${appTheme.dark.colors.themeIndicator};
  }
`;

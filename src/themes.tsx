import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createTheming } from '@callstack/react-theme-provider';

export enum ThemesEnum {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}
export const breakpoints = {
  brp360: 359,
  brp428: 427,
  brp500: 499,
  brp768: 767,
  brp1024: 1023,
  brp1280: 1279,
  brp1440: 1439,
  brp1792: 1791,
};

export const media = {
  brp360: `@media screen and (max-width: ${breakpoints.brp360}px)`,
  brp428: `@media screen and (max-width: ${breakpoints.brp428}px)`,
  brp500: `@media screen and (max-width: ${breakpoints.brp500}px)`,
  brp768: `@media screen and (max-width: ${breakpoints.brp768}px)`,
  brp1024: `@media screen and (max-width: ${breakpoints.brp1024}px)`,
  brp1024Only: `@media screen and (min-width: ${breakpoints.brp768}px) and (max-width: ${breakpoints.brp1024}px)`,
  brp1280: `@media screen and (max-width: ${breakpoints.brp1280}px)`,
  brp1440: `@media screen and (max-width: ${breakpoints.brp1440}px)`,
  brp1792: `@media screen and (max-width: ${breakpoints.brp1792}px)`,
  mqDark: '@media (prefers-color-scheme: dark)',
};

export const tmSelectors = {
  dark: 'body.DARK &',
};

export const lightPalette = {
  pageBackground:
    'linear-gradient(179.59deg, #EDEDF0 3.37%, #EDEEF1 11.26%, #F3FBFE 18.4%, #FEFCFA 30.72%, #FFFFFF 59.29%, #FFFFFF 100.12%)',
  transparent: 'transparent',
  bg100: '#F7F7FA',
  font0: '#0A0A0A',
  font50: '#888890',
  font100: '#1B182D',
  font150: '#2B2B2F',
  font200: '#404146',
  font250: '#888890',
  themeIndicator: '#888890',
  themeBg: '#20232A',
  hamburger: '#404146',
  mobileMenuBackground:
    'linear-gradient(179.76deg, #edeef1 4.01%,    #f3fbfe 45.82%,    #fefcfa 112.58% )',
  menuItemActive:
    'linear-gradient(90deg, #CACAD2 1.5%, rgba(202, 202, 210, 0) 91.74%)',
  titleBg: 'linear-gradient(93.28deg, #404146 29%, #ecbb97 221.41%)',
  bgTexture:
    'linear-gradient(227.05deg, rgba(196, 196, 196, 0) 16.93%, #C4C4C4 43.54%, rgba(196, 196, 196, 0) 74.26%);',
  ctaBg:
    'linear-gradient(71.28deg, #fff4ee -21.07%, #ffffff 67.73%), linear-gradient(101deg, #fadeca, #c8e9fc)',

  ctaShadow: '#fff ',
  footerBg: 'linear-gradient(70.45deg, #EDEDF0 0%, #FAFAFA 104.52%)',
  hardhatMain: '#EDCF00',
  slangMain: '#F7CEB1',
  edrMain: '#BEE4FA',
  navbarBlur: '#ffffffb2',
  border100: '#DCDCE1',
  buttonShadow: '#EFEFEF',
  link: '#61626B',
};

export const darkPalette = {
  pageBackground:
    'linear-gradient(180deg, #191B22 0.21%, #23262E 22.86%, #191B22 39.11%, #1C1E26 100.14%)',
  transparent: 'transparent',
  bg100: '#13141A',
  font0: '#FFFFFF',
  font50: '#888890',
  font100: '#EDEDF0',
  font150: '#2B2B2F',
  font200: '#EDEDF0',
  font250: '#DCDCE1',
  themeIndicator: '#EDEDF0',
  themeBg: '#DCDCE1',
  hamburger: '#EDEDF0',
  mobileMenuBackground:
    'linear-gradient(180deg, #191B22 6.7%, #23262E 37.01%, #191B22 63.98%, #1C1E26 100.14%)',
  menuItemActive:
    ' linear-gradient(90deg, #696B73 1.35%, rgba(64, 65, 70, 0) 100.18%)',
  titleBg: 'linear-gradient(89.7deg, #EDEDF0 -0.64%, #CACAD2 101.89%)',
  bgTexture:
    'linear-gradient(227.05deg, rgba(196, 196, 196, 0) 16.93%, #C4C4C4 43.54%, rgba(196, 196, 196, 0) 74.26%)',
  ctaBg:
    'linear-gradient(71.28deg, #191B22 -21.07%, #20232A 67.73%),linear-gradient(90.65deg, #FADECA 17.08%, #BEE4FA 87.78%)',
  ctaShadow: '#13141A',
  footerBg: '#24262E',
  hardhatMain: '#EDCF00',
  slangMain: '#F7CEB1',
  edrMain: '#BEE4FA',
  navbarBlur: '#13141ACC',
  border100: '#13141A',
  buttonShadow: '#13141A7F',
  link: '#B0B0B8',
} as Palette;

type Palette = typeof lightPalette;

export const appTheme = {
  light: {
    colors: lightPalette,
  },
  dark: {
    colors: darkPalette,
  },
  media,
  breakpoints,
  tmSelectors,
};

const themesArray = Object.values(ThemesEnum);

export const getNextTheme = (currentTheme: ThemesEnum): ThemesEnum => {
  const currentThemeIndex = themesArray.indexOf(currentTheme);
  const nextThemeIndex =
    currentThemeIndex === themesArray.length - 1 ? 0 : currentThemeIndex + 1;
  const nextTheme = themesArray[nextThemeIndex];
  return nextTheme;
};

export const theming = createTheming(appTheme);

interface IThemeContext {
  theme: ThemesEnum;
  changeTheme: () => void;
}

export const ThemeContext = React.createContext<IThemeContext>({
  theme: ThemesEnum.LIGHT,
  changeTheme: () => {},
});

export const ThemeProvider = ({
  children,
}: React.PropsWithChildren<{}>): JSX.Element => {
  const [theme, setTheme] = useState<ThemesEnum>(ThemesEnum.LIGHT);

  const changeTheme = useCallback(() => {
    const body = document.querySelector('body') as Element;
    const newTheme = ThemesEnum[getNextTheme(theme)];
    body.className = newTheme;
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  }, [theme, setTheme]);

  const initialContext = useMemo(
    () => ({ theme, changeTheme }),
    [theme, changeTheme]
  );

  useEffect(() => {
    const savedTheme =
      (localStorage.getItem('theme') as ThemesEnum) || ThemesEnum.LIGHT;
    setTheme(savedTheme);
  }, []);

  return (
    <ThemeContext.Provider value={initialContext}>
      {/* @ts-ignore */}
      <theming.ThemeProvider theme={appTheme}>{children}</theming.ThemeProvider>
    </ThemeContext.Provider>
  );
};

import { useContext } from 'react';
import DarkThemeIcon from '../assets/themes/dark';
import LightThemeIcon from '../assets/themes/light';
import { ThemeContext } from '../themes';
import {
  ActiveThemeIndicator,
  ThemeSwitcherContainer,
  ThemeSwitcherItem,
} from './styled/ThemeSwitcher.styled';

const ThemeSwitcher = () => {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <ThemeSwitcherContainer onClick={() => changeTheme()}>
      <ThemeSwitcherItem className='light'>
        <LightThemeIcon />
      </ThemeSwitcherItem>
      <ThemeSwitcherItem className='dark'>
        <DarkThemeIcon />
      </ThemeSwitcherItem>
      <ActiveThemeIndicator />
    </ThemeSwitcherContainer>
  );
};

export default ThemeSwitcher;

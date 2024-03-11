import React, { FC, useContext } from 'react';
import Link from 'next/link';

import NomicFoundationLogo from '../assets/nomic-foundation-logo';
import NomicFoundationLogoDark from '../assets/nomic-foundation-logo_dark';
import { menuItemsList, socialsItems } from '../config';
import { ControlsContainer, HamburgerWrapper, LogoContainer, Navigation } from './styled/LandingNavigation.styled';
import { ThemeContext } from '../themes';
import DesktopMenu from './ui/DesktopMenu';
import HamburgerIcon from '../assets/icons/hamburger';
import CrossIcon from '../assets/icons/cross';
import MobileMenu from './ui/MobileMenu';

const LandingNavigation: FC<{
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}> = ({ isOpen, setIsOpen }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Navigation onClick={(e) => e.stopPropagation()}>
      <ControlsContainer>
        <Link
          href='/'
          passHref
          aria-label='Nomic Foundation'
          role='link'
        >
          <LogoContainer>{theme === 'LIGHT' ? <NomicFoundationLogo /> : <NomicFoundationLogoDark />}</LogoContainer>
        </Link>

        <DesktopMenu
          menuItems={menuItemsList}
          socialsItems={socialsItems}
        />
        <HamburgerWrapper
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <CrossIcon /> : <HamburgerIcon />}
        </HamburgerWrapper>
      </ControlsContainer>

      <MobileMenu
        menuItems={menuItemsList}
        socialsItems={socialsItems}
        isOpen={isOpen}
        closeMobileMenu={() => setIsOpen(false)}
      />
    </Navigation>
  );
};

export default LandingNavigation;
function useRounter() {
  throw new Error('Function not implemented.');
}

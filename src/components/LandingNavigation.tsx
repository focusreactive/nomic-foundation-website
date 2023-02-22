import React, { FC, useContext, useEffect, useState } from 'react';
import Link from 'next/link';

import NomicFoundationLogo from '../assets/nomic-foundation-logo';
import NomicFoundationLogoDark from '../assets/nomic-foundation-logo_dark';
// import Hamburger from './ui/Hamburger';
// import MobileMenu from './ui/MobileMenu';
// import DesktopMenu from './ui/DesktopMenu';
import { menuItemsList, socialsItems } from '../config';
import {
  ControlsContainer,
  HamburgerWrapper,
  LogoContainer,
  Navigation,
} from './styled/LandingNavigation.styled';
import { ThemeContext } from '../themes';
import DesktopMenu from './ui/DesktopMenu';
import HamburgerIcon from '../assets/icons/hamburger';

const LandingNavigation: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const body = document.querySelector('body');
    if (!body) return;

    if (isMobileMenuOpen) {
      // Disable scroll
      body.style.overflow = 'hidden';
    } else {
      // Enable scroll
      body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  return (
    <Navigation>
      <ControlsContainer>
        <Link href='/' passHref>
          <LogoContainer aria-label='home page'>
            {theme === 'LIGHT' ? (
              <NomicFoundationLogo />
            ) : (
              <NomicFoundationLogoDark />
            )}
          </LogoContainer>
        </Link>
        {/* <Hamburger
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        /> */}
        <DesktopMenu menuItems={menuItemsList} socialsItems={socialsItems} />
        <HamburgerWrapper>
          <HamburgerIcon />
        </HamburgerWrapper>
      </ControlsContainer>

      {/* <MobileMenu
        menuItems={menuItemsList}
        socialsItems={socialsItems}
        isOpen={isMobileMenuOpen}
        closeMobileMenu={() => setIsMobileMenuOpen(false)}
      /> */}
    </Navigation>
  );
};

export default LandingNavigation;

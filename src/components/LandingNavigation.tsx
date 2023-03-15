import React, { FC, useContext, useEffect, useState } from 'react';
import Link from 'next/link';

import NomicFoundationLogo from '../assets/nomic-foundation-logo';
import NomicFoundationLogoDark from '../assets/nomic-foundation-logo_dark';
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
import CrossIcon from '../assets/icons/cross';
import MobileMenu from './ui/MobileMenu';

const LandingNavigation: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <Navigation onClick={(e) => e.stopPropagation()}>
      <ControlsContainer>
        <Link href='/' passHref aria-label='Nomic Foundation' role='link'>
          <LogoContainer>
            {theme === 'LIGHT' ? (
              <NomicFoundationLogo />
            ) : (
              <NomicFoundationLogoDark />
            )}
          </LogoContainer>
        </Link>

        <DesktopMenu menuItems={menuItemsList} socialsItems={socialsItems} />
        <HamburgerWrapper
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          {isMobileMenuOpen ? <CrossIcon /> : <HamburgerIcon />}
        </HamburgerWrapper>
      </ControlsContainer>

      <MobileMenu
        menuItems={menuItemsList}
        socialsItems={socialsItems}
        isOpen={isMobileMenuOpen}
        closeMobileMenu={() => setIsMobileMenuOpen(false)}
      />
    </Navigation>
  );
};

export default LandingNavigation;

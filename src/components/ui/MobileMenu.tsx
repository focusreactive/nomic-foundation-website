import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { socialsItems } from '../../config';
import { MenuItemType } from '../../types/commonTypes';
import Socials from '../Socials';
import ThemeSwitcher from '../ThemeSwitcher';
import {
  MobileMenuContainer,
  MobileMenuContent,
  MobileMenuFooter,
  MobileMenuItem,
  MobileMenuItemsList,
} from './styled/MobileMenu.styled';
import ExternalLinkIcon from '../../assets/icons/ExternalLinkIcon';

type Props = {
  menuItems: MenuItemType[];
  socialsItems: typeof socialsItems;
  isOpen: boolean;
  closeMobileMenu: () => void;
};

const MobileMenu = ({ menuItems, isOpen, closeMobileMenu }: Props) => {
  const router = useRouter();

  useEffect(() => {
    const listener = () => closeMobileMenu();

    window.addEventListener('click', listener);

    return () => {
      window.removeEventListener('click', listener);
    };
  }, [closeMobileMenu]);

  return (
    <MobileMenuContainer
      isOpen={isOpen}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <MobileMenuContent>
        <MobileMenuItemsList>
          {menuItems.map((menuItem) => {
            const isLinkActive = router.asPath.includes(menuItem.href);
            const isExternal = menuItem.href.startsWith('http');
            return (
              <MobileMenuItem
                className={isLinkActive ? 'active' : ''}
                key={menuItem.label}
              >
                <Link href={menuItem.href} onClick={closeMobileMenu}>
                  {menuItem.label}
                  {isExternal && <ExternalLinkIcon />}
                </Link>
              </MobileMenuItem>
            );
          })}
        </MobileMenuItemsList>
        <MobileMenuFooter>
          <Socials />
          <ThemeSwitcher />
        </MobileMenuFooter>
      </MobileMenuContent>
    </MobileMenuContainer>
  );
};

export default MobileMenu;

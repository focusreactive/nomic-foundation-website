import Link from 'next/link';
import { useRouter } from 'next/router';
import { socialsItems } from '../../config';
import { MenuItemType } from '../../types/commonTypes';
import Socials from '../Socials';
import ThemeSwitcher from '../ThemeSwitcher';
import {
  DesktopMenuContainer,
  MenuItem,
  MenuItemsContainer,
  SelectedMenuItem,
} from './styled/DesktopMenu.styled';

type Props = {
  menuItems: MenuItemType[];
  socialsItems: typeof socialsItems;
};

const DesktopMenu = ({ menuItems }: Props) => {
  const router = useRouter();

  return <DesktopMenuContainer>
    <MenuItemsContainer>
      {menuItems.map((menuItem) => {
        const target = menuItem.href.startsWith("http") ? "_blank" : undefined;

        let MenuItemComponent = MenuItem;
        if (menuItem.href === router.pathname) {
          MenuItemComponent = SelectedMenuItem;
        }

        return (
          <MenuItemComponent key={menuItem.label}>
            <Link href={menuItem.href} target={target}>{menuItem.label}</Link>
          </MenuItemComponent>
        );
      })}
    </MenuItemsContainer>
    <Socials />

    <div style={{ marginLeft: ' 24px' }}>
      <ThemeSwitcher />
    </div>
  </DesktopMenuContainer>
};

export default DesktopMenu;

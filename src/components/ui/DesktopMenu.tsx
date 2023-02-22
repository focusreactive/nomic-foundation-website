import Link from 'next/link';
import { socialsItems } from '../../config';
import { MenuItemType } from '../../types/commonTypes';
import ThemeSwitcher from '../ThemeSwitcher';
import {
  DesktopMenuContainer,
  MenuItem,
  MenuItemsContainer,
  SocialItem,
  SocialsContainer,
} from './styled/DesktopMenu.styled';

type Props = {
  menuItems: MenuItemType[];
  socialsItems: typeof socialsItems;
};

const DesktopMenu = ({ menuItems }: Props) => (
  <DesktopMenuContainer>
    <MenuItemsContainer>
      {menuItems.map((menuItem) => {
        return (
          <MenuItem key={menuItem.label}>
            <Link href={menuItem.href}>{menuItem.label}</Link>
          </MenuItem>
        );
      })}
    </MenuItemsContainer>
    <SocialsContainer>
      {socialsItems.map((socialItem) => {
        const { Icon } = socialItem;
        return (
          <Link key={socialItem.name} href={socialItem.href}>
            <SocialItem>
              <Icon />
            </SocialItem>
          </Link>
        );
      })}
    </SocialsContainer>
    <div style={{ marginLeft: ' 24px' }}>
      <ThemeSwitcher />
    </div>
  </DesktopMenuContainer>
);

export default DesktopMenu;

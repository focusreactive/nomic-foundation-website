import Link from 'next/link';
import { socialsItems } from '../config';
import { SocialItem, SocialsContainer } from './ui/styled/DesktopMenu.styled';

const Socials = () => {
  return (
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
  );
};

export default Socials;

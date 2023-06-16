import Link from 'next/link';
import { socialsItems } from '../config';
import { SocialItem, SocialsContainer } from './ui/styled/DesktopMenu.styled';

const Socials = () => {
  return (
    <SocialsContainer>
      {socialsItems.map((socialItem) => {
        const { Icon } = socialItem;
        const target = socialItem.href.startsWith("http") ? "_blank" : undefined;
        return (
          <Link
            key={socialItem.name}
            href={socialItem.href}
            target={target}
            aria-label={socialItem.name}
          >
            <SocialItem>
              <Icon />
              {socialItem.name}
            </SocialItem>
          </Link>
        );
      })}
    </SocialsContainer>
  );
};

export default Socials;

import MediumIcon from './assets/socials/medium';
import TwitterIcon from './assets/socials/twitter';
import { MenuItemType, SocialsEnum } from './types/commonTypes';

export const BANNER_LINK = 'https://www.notion.so/Nomic-Foundation-jobs-991b37c547554f75b89a95f437fd5056';

export const bannerContent = {
  text: 'Announcing the Nomic Foundation',
  href: BANNER_LINK,
};

export const menuItemsList: MenuItemType[] = [
  {
    label: 'What we do',
    href: '/what-we-do',
  },
  {
    label: 'Who we are',
    href: '/who-we-are',
  },
  {
    label: 'jobs',
    href: '/jobs',
  },
  {
    label: 'Hardhat',
    href: 'https://hardhat.org/',
  },
  {
    label: 'Building Blocks',
    href: '/',
  },
];

export const SOCIALS_LINKS = {
  [SocialsEnum.MEDIUM]: 'https://medium.com/nomic-foundation-blog',
  [SocialsEnum.TWITTER]: 'https://twitter.com/NomicFoundation',
};

export const socialsItems = [
  {
    name: SocialsEnum.MEDIUM,
    href: SOCIALS_LINKS[SocialsEnum.MEDIUM],
    Icon: MediumIcon,
  },
  {
    name: SocialsEnum.TWITTER,
    href: SOCIALS_LINKS[SocialsEnum.TWITTER],
    Icon: TwitterIcon,
  },
];

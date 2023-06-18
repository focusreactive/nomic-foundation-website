import MediumIcon from './assets/socials/medium';
import TwitterIcon from './assets/socials/twitter';
import { MenuItemType, SocialsEnum } from './types/commonTypes';

export const BANNER_LINK =
  'https://medium.com/nomic-foundation-blog/introducing-the-nomic-foundation-an-ethereum-public-goods-organization-31012af67df9';

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
    label: 'Hardhat',
    href: 'https://hardhat.org/',
  },
  {
    label: 'Slang',
    href: '/slang',
  },
  {
    label: 'Rethnet',
    href: '/rethnet',
  },
  {
    label: 'Jobs',
    href: '/jobs',
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

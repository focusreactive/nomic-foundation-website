import LinkedinIcon from './assets/socials/linkedin';
import MediumIcon from './assets/socials/medium';
import TwitterIcon from './assets/socials/twitter';
import { RETHNET_URL, SLANG_URL } from './constants';
import { MenuItemType, SocialsEnum } from './types/commonTypes';

export const BANNER_LINK =
  'https://medium.com/nomic-foundation-blog/introducing-the-nomic-foundation-an-ethereum-public-goods-organization-31012af67df9';

export const bannerContent = {
  text: 'Announcing the Nomic Foundation',
  href: BANNER_LINK,
};

export const SOCIALS_LINKS = {
  [SocialsEnum.MEDIUM]: 'https://medium.com/nomic-foundation-blog',
  [SocialsEnum.TWITTER]: 'https://twitter.com/NomicFoundation',
  [SocialsEnum.LINKEDIN]: 'https://www.linkedin.com/company/nomic-foundation',
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
    href: SLANG_URL,
  },
  {
    label: 'Rethnet',
    href: RETHNET_URL,
  },
  {
    label: 'Jobs',
    href: 'https://jobs.ashbyhq.com/nomic.foundation',
  },
  {
    label: 'Blog',
    href: SOCIALS_LINKS[SocialsEnum.MEDIUM],
  },
];

export const socialsItems = [
  {
    name: SocialsEnum.TWITTER,
    href: SOCIALS_LINKS[SocialsEnum.TWITTER],
    Icon: TwitterIcon,
  },
  {
    name: SocialsEnum.LINKEDIN,
    href: SOCIALS_LINKS[SocialsEnum.LINKEDIN],
    Icon: LinkedinIcon,
  },
];

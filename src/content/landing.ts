import HardhatAssets from '../assets/projects/hardhat';
import SlangAssets from '../assets/projects/slang';
import RethnetAssets from '../assets/projects/rethnet';
import { appTheme } from '../themes';

const {
  HardhatIcon,
  HardhatPictureDesk,
  HardhatPictureDeskDark,
  HardhatPictureMobile,
  HardhatPictureMobileDark,
} = HardhatAssets;

const {
  SlangIcon,
  SlangPictureDesk,
  SlangPictureDeskDark,
  SlangPictureMobile,
  SlangPictureMobileDark,
} = SlangAssets;
const {
  RethnetIcon,
  RethnetPictureDesk,
  RethnetPictureDeskDark,
  RethnetPictureMobile,
  RethnetPictureMobileDark,
} = RethnetAssets;

export const HERO_BLOCK_CONTENT = {
  cta: {
    href: '/what-we-do',
    label: 'View more',
  },
  title: 'Empowering developers\nto decentralize the world',
  subtitle: 'Independent non-profit organization.',
};

export const WHO_WE_ARE_BLOCK_CONTENT = {
  cta: {
    href: '/who-we-are',
    label: 'View more',
  },
  text: 'The <b>Nomic Foundation</b> is an independent non-profit organization dedicated to building public good infrastructure to empower Ethereum developers to build decentralized software.',
};

export const FOOTER_CONTENT = {
  copyright: 'Copyright 2022 Nomic Foundation',
  privacy: {
    text: 'Privacy Policy',
    href: '/',
  },
};

export const PROJECTS_BLOCK_CONTENT = {
  title: 'Projects',
  subtitle: 'Developer tools and low-level tooling infrastructure',
  projects: [
    {
      title: 'Hardhat',
      text: 'The Ethereum developer environment for professionals. Write, test, compile, deploy, grow, and scale. Try Hardhat.',
      cta: {
        href: 'https://hardhat.org',
        label: 'Try Hardhat',
      },
      Icon: HardhatIcon,
      PictureDesk: HardhatPictureDesk,
      PictureDeskDark: HardhatPictureDeskDark,
      PictureMobile: HardhatPictureMobile,
      PictureMobileDark: HardhatPictureMobileDark,
      color: appTheme.light.colors.hardhatMain,
    },
    {
      title: 'Slang',
      text: 'A modular set of compiler APIs empowering the next generation of Solidity code analysis and developer tooling. Written in Rust and distributed in multiple languages.',
      cta: {
        href: '/',
        label: 'Learn more',
      },
      Icon: SlangIcon,
      PictureDesk: SlangPictureDesk,
      PictureDeskDark: SlangPictureDeskDark,
      PictureMobile: SlangPictureMobile,
      PictureMobileDark: SlangPictureMobileDark,
      color: appTheme.light.colors.slangMain,
    },
    {
      title: 'Rethnet',
      text: 'A debugging-enabled Ethereum runtime implementation that can be reused to build new developer tools.',
      cta: {
        href: '/',
        label: 'Learn more',
      },
      Icon: RethnetIcon,
      PictureDesk: RethnetPictureDesk,
      PictureDeskDark: RethnetPictureDeskDark,
      PictureMobile: RethnetPictureMobile,
      PictureMobileDark: RethnetPictureMobileDark,
      color: appTheme.light.colors.rethnetMain,
    },
  ],
};

export const WORK_WITH_US_CONTENT = {
  title: 'Work with us',
  text: 'Work for us, from anywhere. We are hiring for hundreds of open positions across more than 96 countries.',
  cta: {
    href: '/',
    label: 'View more',
  },
};

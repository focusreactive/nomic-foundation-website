import HardhatAssets from '../assets/projects/hardhat';
import SlangAssets from '../assets/projects/slang';
import RethnetAssets from '../assets/projects/rethnet';
import { appTheme } from '../themes';
import EthereumFoundationLogo from '../assets/supporters/ethereum-foundation-logo';
import VitalikButerinLogo from '../assets/supporters/vitalik-buterin-logo';
import AndreesenHorowitzLogo from '../assets/supporters/andreesen-horowitz-logo';
import ChainlinkLogo from '../assets/supporters/chainlink-logo';
import KaszekLogo from '../assets/supporters/kaszek-logo';
import TheGraphLogo from '../assets/supporters/the-graph-logo';
import ACapitalLogo from '../assets/supporters/a-capital-logo';
import DecentralandLogo from '../assets/supporters/decentraland-logo';
import PolygonLogo from '../assets/supporters/polygon-logo';
import ConsensysLogo from '../assets/supporters/consensys-logo';
import CoinbaseLogo from '../assets/supporters/coinbase-logo';
import GnosisLogo from '../assets/supporters/gnosis-logo';
import YearnLogo from '../assets/supporters/yearn-logo';
import UniswapLogo from '../assets/supporters/uniswap-logo';
import { RETHNET_URL, SLANG_URL } from '../constants';

const {
  HardhatIcon,
  HardhatIconDark,
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
    label: 'Learn more',
  },
  title: 'Empowering<br>developers<br>to decentralize<br>the world',
  subtitle: 'A non-profit dedicated to Ethereum developers',
};

export const WHO_WE_ARE_BLOCK_CONTENT = {
  cta: {
    href: '/what-we-do',
    label: 'Learn more',
  },
  text: "The <b>Nomic Foundation</b> is a non-profit advancing the Ethereum ecosystem. We provide open-source engineering software to empower developers today and ensure Ethereum's continued success in the future.",
};

export const FOOTER_CONTENT = {
  copyright: 'Copyright 2023 Nomic Foundation',
  privacy: {
    text: 'Privacy Policy',
    href: 'https://hardhat.org/privacy-policy.html',
  },
};

export const PROJECTS_BLOCK_CONTENT = {
  title: 'Projects',
  subtitle: 'Our open-source projects directly address developer needs and create foundations for new developer tools to be built.',
  projects: [
    {
      title: 'Hardhat',
      text: 'The Ethereum developer environment for professionals. Write, test, compile, deploy, grow, and scale.',
      cta: {
        href: 'https://hardhat.org',
        label: 'Try Hardhat',
      },
      Icon: HardhatIcon,
      IconDark: HardhatIconDark,
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
        href: SLANG_URL,
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
      text: 'An Ethereum development runtime implementation that can be reused to build new developer tools.',
      cta: {
        href: RETHNET_URL,
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
  text: 'A small remote team working on hard engineering challenges that drive meaningful impact in the Ethereum ecosystem. Autonomy, trust, kindness, and high standards.',
  cta: {
    href: 'https://jobs.ashbyhq.com/nomic.foundation',
    label: 'Learn more',
  },
};

export const SUPPORTERS_CONTENT = {
  title: 'Supporters',
  logos: [
    EthereumFoundationLogo,
    VitalikButerinLogo,
    ConsensysLogo,
    CoinbaseLogo,
    AndreesenHorowitzLogo,
    UniswapLogo,
    ChainlinkLogo,
    DecentralandLogo,
    TheGraphLogo,
    PolygonLogo,
    GnosisLogo,
    YearnLogo,
    ACapitalLogo,
    KaszekLogo,
  ],
};

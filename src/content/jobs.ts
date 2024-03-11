import { appTheme } from '../themes';

import JobsHeroImgLarge from '../../public/img/jobs-hero-img-large.webp';
import JobsHeroImgVertical from '../../public/img/jobs-hero-img-vertical.webp';
import JobsHeroImgHorizontal from '../../public/img/jobs-hero-img-horizontal.webp';
import CultureAssets from '../assets/culture';
import BenefitsAssets from '../assets/benefits';

const { CulturePictureMap, CulturePictureMapDark, CulturePictureStar, CulturePictureStarDark } = CultureAssets;

const {
  BenefitsPictureWorkSchedule,
  BenefitsPictureWorkScheduleDark,
  BenefitsPictureUnlimitedPTO,
  BenefitsPictureUnlimitedPTODark,
  BenefitsPictureStipend,
  BenefitsPictureStipendDark,
  BenefitsPictureLearningAndDevelopment,
  BenefitsPictureLearningAndDevelopmentDark,
  BenefitsPictureVesting,
  BenefitsPictureVestingDark,
} = BenefitsAssets;

export const HERO_BLOCK_CONTENT = {
  cta: {
    href: '/what-we-do',
    label: 'See current openings',
  },
  title: 'Our users are building the decentralized future',
  subtitle: 'Careers at Nomic Foundation',
  text: 'The Nomic Foundation is a non-profit advancing the Ethereum ecosystem. We build runtimes, compilers, build systems, and deployment solutions that are used by tens of thousands of users. Our focus is on empowering developers to decentralize the world. You can help.',

  imgLarge: { src: JobsHeroImgLarge.src, alt: '' },
  imgVertical: { src: JobsHeroImgVertical.src, alt: '' },
  imgHorizontal: { src: JobsHeroImgHorizontal.src, alt: '' },
};

export const WHY_NOMIC_BLOCK_CONTENT = {
  title: 'Why join Nomic',
  items: [
    {
      title: 'Your impact',
      text: 'At Nomic, every person makes a difference. You will clearly see the impact that you contribute to our mission and Ethereum itself. Your team’s top-level results will be meaningfully different due to your contributions, and you will be able to pinpoint the exact contribution you made to upgrading a nascent industry’s stack.',
    },
    {
      title: 'Deep technical challenges',
      text: 'We tackle deep developer infrastructure projects that are usually only available in larger organizations. We build runtimes and compilers used by tens of thousands of users.',
    },
    {
      title: 'Mission-driven value creation',
      text: 'Your contributions will directly impact an ecosystem that is shaping the future of finance, data, and ownership. You won’t be working on optimizing a revenue stream to increase shareholder profits; you’ll create value for the Ethereum community and developer ecosystem.',
    },
    {
      title: 'Lean and robust',
      text: 'We run robust engineering practices and lightweight processes that provide us with structure and fast decision-making. Your time will be spent on technical challenges, coding, and launching features.',
    },
  ],
};

export const OUR_VALUES_BLOCK_CONTENT = {
  title: 'Our values',
  items: [
    {
      title: 'Crypto & Ethereum belief',
      text: 'We believe in blockchain technology as a force for change that will produce meaningful value for society through innovation. We believe in Ethereum as a movement and technology, and we are aligned with its values. We actively participate in the community, and we aim to contribute to the long-term growth of the ecosystem.',
    },
    {
      title: 'Social Impact',
      text: 'We care about creating value for the world and Ethereum’s community in a meaningful way.',
    },
    {
      title: 'Developer Experience',
      text: 'We consider a smooth building experience essential for ecosystem growth, and we take pride and pleasure in making software easier to build.',
    },
    {
      title: 'Time is Precious',
      text: "We are respectful of people's time, including that of our users, the Ethereum community, external contributors, and our own team members and organization. Aiming for fast and efficient is our default.",
    },
    {
      title: 'High Standards',
      text: 'We aim to take the hard path without compromising quality or losing our sense of pragmatism.',
    },
    {
      title: 'Level Up',
      text: "We always try to improve at all levels: individually, in our projects, and as a team. Beginner's mindset.",
    },
    {
      title: 'Instigate Change',
      text: "When we see room for improvement, we point it out and seek iteration, even if it's outside our direct responsibilities or areas of expertise.",
    },
    {
      title: 'Autonomy',
      text: 'To create space for deep focus, schedule flexibility, and effective async remote collaboration, we strive for autonomy in how we approach work and collaboration.',
    },
    {
      title: 'Kindness',
      text: 'We value and only hire people who embody respect, compassion, empathy, and kindness.',
    },
  ],
};

export const CULTURE_BLOCK_CONTENT = {
  title: 'Culture',
  suptitle:
    'We are an impact-driven remote team of 16 individuals coming from different walks of life. We look for alignment on mission and values as key aspects when we hire.',
  reviews: [
    {
      text: 'Flexibility. Being able to work at any time, as long as I coordinate with my team, is super nice. Working alongside such a group of crazy smart people is really inspiring. It constantly reminds me that there’s so much to learn, and I love it.',
      name: 'Luis Schaab',
      profession: 'Software Engineer',
    },
    {
      text: 'The team is as welcoming as it is diverse, so whether it’s technical or cultural, I feel like I’m learning new things constantly which is really amazing.',
      name: 'Zoey Morgan',
      profession: 'Software Engineer',
    },
    {
      text: 'Working at a non-profit means being 100% focused on the value we are creating, which is great. And the team is amazing: smart, kind, and fun people, even if they don’t share enough pictures of their pets.',
      name: 'Franco Victorio',
      profession: 'Software Engineer',
    },
  ],

  contents: [
    {
      title: 'Remote-first',
      text: 'Our team is fully remote, and we hire within UTC+2 to UTC-4 time zones. We work asynchronously and autonomously, relying on trust and great communication. This allows everyone to create a working schedule that integrates well with other important aspects of their lives. Hiring across many countries allows us to naturally integrate diverse perspectives.',
      Picture: CulturePictureMap,
      PictureDark: CulturePictureMapDark,
      stats: [
        {
          title: '10 countries',
        },
        {
          title: '11 nationalities',
        },
        {
          title: '13 languages',
        },
      ],
    },
    {
      title: 'Team Retreats',
      text: "While we love remote, time together in person is really important. Twice a year, we set aside about a week for our in-person retreats. We've had great times in places like Malaga, Patagonia, and Tuscany. During these trips we focus on work that’s well-suited for being in person, but we also have fun! Expect some hiking, yoga, kayaking, cooking, and even wine tasting. These retreats help us bond, share experiences, and build deeper relationships with one another.",
      Picture: CulturePictureStar,
      PictureDark: CulturePictureStarDark,
    },
  ],
};

export const BENEFITS_BLOCK_CONTENT = {
  title: 'Benefits',
  items: [
    {
      Picture: BenefitsPictureWorkSchedule,
      PictureDark: BenefitsPictureWorkScheduleDark,
      title: 'Remote and flexible working arrangements',
    },
    {
      Picture: BenefitsPictureUnlimitedPTO,
      PictureDark: BenefitsPictureUnlimitedPTODark,
      title: 'Unlimited PTO',
    },
    {
      Picture: BenefitsPictureStipend,
      PictureDark: BenefitsPictureStipendDark,
      title: 'Stipend to set up your home office',
    },
    {
      Picture: BenefitsPictureLearningAndDevelopment,
      PictureDark: BenefitsPictureLearningAndDevelopmentDark,
      title: 'Annual learning & development budget',
    },
    {
      Picture: BenefitsPictureVesting,
      PictureDark: BenefitsPictureVestingDark,
      title: 'Vesting ETH package in your comp',
    },
  ],
};

export const JOIN_US_BLOCK_CONTENT = {
  title: 'Join us',
  hiringProcess: {
    title: 'Hiring Process',
    stepTitleFirst: 'Week 1',
    stepTitleSecond: 'Week 2',
    items: [
      {
        list: [
          {
            title: 'Application',
          },
        ],
      },
      {
        list: [
          {
            title: 'Intro call',
          },
          {
            title: 'Technical Screen',
          },
        ],
      },
      {
        list: [
          {
            title: 'Project Review',
          },
          {
            title: 'Architecture',
          },
          {
            title: 'Coding',
          },
        ],
      },
      {
        list: [
          {
            title: 'Leaderships Interviews',
          },
        ],
      },
      {
        list: [
          {
            title: 'Offer',
          },
          {
            title: 'Reference Checks',
          },
        ],
      },
    ],
  },
};

export const FAQ_BLOCK_CONTENT = {
  title: 'FAQ',
  questions: [
    {
      title: 'How long does the interview process take?',
      text: 'Our interview process takes on average 3-4 weeks to complete.',
    },
    {
      title: 'Which locations do you hire in?',
      text: '',
    },
    {
      title: 'How can I best prepare for interviewing with Nomic Foundation?',
      text: '',
    },
    {
      title: 'How does Nomic manage remote work?',
      text: '',
    },
    {
      title: 'What’s it like to operate as a non-profit organization',
      text: '',
    },
    {
      title: 'How are the teams structured?',
      text: '',
    },

    {
      title: 'What kind of development processes does the Engineering team follow?',
      text: '',
    },
  ],
};

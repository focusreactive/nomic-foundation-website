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
    href: '#job-board',
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
      link: '#',
      text: 'Flexibility. Being able to work at any time, as long as I coordinate with my team, is super nice. Working alongside such a group of crazy smart people is really inspiring. It constantly reminds me that there’s so much to learn, and I love it.',
      name: 'Luis Schaab',
      profession: 'Software Engineer',
    },
    {
      link: '#',
      text: 'The team is as welcoming as it is diverse, so whether it’s technical or cultural, I feel like I’m learning new things constantly which is really amazing.',
      name: 'Zoey Morgan',
      profession: 'Software Engineer',
    },
    {
      link: '#',
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

export const HIRING_PROCESS_BLOCK_CONTENT = {
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
};

export const FAQ_BLOCK_CONTENT = {
  title: 'FAQ',
  questions: [
    {
      title: 'How long does the interview process take?',
      text: '<p>It takes about 2 weeks to complete to core interviews and move forward to the offer & reference checks</p>',
    },
    {
      title: 'Which locations do you hire in?',
      text: '<p>We hire in locations  within UTC+1 to UTC-4 time zones.  Although we work asynchronously, hiring in these time zones allows for 3-4 hours of overlap between team members.</p>',
    },
    {
      title: 'How can I best prepare for interviewing with Nomic Foundation?',
      text: '<p>If you’re reading this you’re on your way there! We encourage you to get familiar with Nomic and our core values.  Additionally, looking into our open source projects will give you an idea of what we are building.  Once you get invited to interview with us, our talent team will share more information about the interviews, what to expect, and how to prepare.</p>',
    },
    {
      title: 'How does Nomic manage remote work?',
      text: '<p>We use <a href="http://deel.com/" rel="noopener noreferrer" tabindex="0">deel.com</a> to employ team members in various locations in a compliant way. Depending on where you are based, you would be able to choose to be employed through a local entity, or as a direct contractor. </p><p>Once you’re part of the team, you’ll quickly find out that we work mostly asynchronously.  In practice, this means that we rely heavily on written communication (Slack and Notion).  Our aim is to maximize the time we spend on deep, uninterrupted, focused work.  Nevertheless, we kick off each week on a Monday with a short team call.  Every 2 weeks we schedule an unstructured team social, and we meet in person twice a year.</p>',
    },

    {
      title: 'How are the teams structured?',
      text: '<p>Our teams are small, up to 4-5 people each.  All engineers.  We have team leads who also write code.  The Engineering team is led by the Head of Engineering.</p>',
    },
    {
      title: 'What kind of development processes does the Engineering team follow?',
      text: '<p>We loosely follow Scrum for sprint planning and OKRs for quarterly and yearly planning. </p>',
    },
    {
      title: 'Why is Nomic a non-profit?',
      text: '<p>The kind of open source infrastructure that we build aren’t really businesses.  Orgs that tend to build such things are massive and they work on these things to support their core businesses.  We saw the big need in Ethereum for us to work on this kind of project and it wouldn’t be realistic to do it as a for-profit company. If we remained a for-profit company, we’d have to focus to building things that could generate revenue.  The things we work on are public goods for the Ethereum ecosystem and as such they don’t align well with for-profit organizations.</p>',
    },
    {
      title: 'How is Nomic funded?',
      text: '<p>Through ecosystem donations from players who have built on top of our tools and understand the importance of developer experience, given that Ethereum’s core value proposition is a software development platform.</p>',
    },
    {
      title: 'How do you operate as a non-profit?',
      text: '<p>The same as any other tech startup, with the different incentives, motivations, and success definition.</p>',
    },

    {
      title: 'How does being a non-profit influence goal setting and roadmap planning?',
      text: '<p>The ultimate goal is impact and not revenue or profit - that’s the only difference. We care about what value we create for the users and not whether or not we’re capturing it. </p>',
    },
  ],
};

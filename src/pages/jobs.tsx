import type { NextPage } from 'next';
import LandingLayout from '../components/LandingLayout';

import HeroBlock from '../components/jobsBlocks/HeroBlock';
import {
  BENEFITS_BLOCK_CONTENT,
  CULTURE_BLOCK_CONTENT,
  FAQ_BLOCK_CONTENT,
  HERO_BLOCK_CONTENT,
  HIRING_PROCESS_BLOCK_CONTENT,
  OUR_VALUES_BLOCK_CONTENT,
  WHY_NOMIC_BLOCK_CONTENT,
} from '../content/jobs';
import WhyNomicBlock from '../components/jobsBlocks/WhyNomicBlock';
import OurValuesBlock from '../components/jobsBlocks/OurValuesBlock';
import CultureBlock from '../components/jobsBlocks/CultureBlock';
import BenefitsBlock from '../components/jobsBlocks/BenefitsBlock';
import FaqBlock from '../components/jobsBlocks/FaqBlock';
import { appTheme } from '../themes';
import HiringProcessBlock from '../components/jobsBlocks/HiringProcessBlock';
import AshbyBlockContainer from '../components/jobsBlocks/AshbyBlock';

const Jobs: NextPage = () => {
  return (
    <LandingLayout
      isLanding={false}
      seo={{
        title: 'Nomic Foundation',
        description: 'Empowering developers to decentralize the world',
      }}
      bodyBg={appTheme.light.colors.jobsBackground}
    >
      <HeroBlock content={HERO_BLOCK_CONTENT} />
      <WhyNomicBlock content={WHY_NOMIC_BLOCK_CONTENT} />
      <OurValuesBlock content={OUR_VALUES_BLOCK_CONTENT} />
      <CultureBlock content={CULTURE_BLOCK_CONTENT} />
      <BenefitsBlock content={BENEFITS_BLOCK_CONTENT} />
      <AshbyBlockContainer />
      <HiringProcessBlock content={HIRING_PROCESS_BLOCK_CONTENT} />
      <FaqBlock content={FAQ_BLOCK_CONTENT} />
    </LandingLayout>
  );
};

export default Jobs;

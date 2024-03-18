import type { NextPage } from 'next';
import HeroBlock from '../components/landingBlocks/HeroBlock';
import Projects from '../components/landingBlocks/ProjectsBlock';
import SupportersBlock from '../components/landingBlocks/SupportersBlock';
import WhoWeAre from '../components/landingBlocks/WhoWeAreBlock';
import WorkWithUs from '../components/landingBlocks/WorkWithUsBlock';
import LandingLayout from '../components/LandingLayout';
import {
  HERO_BLOCK_CONTENT,
  PROJECTS_BLOCK_CONTENT,
  SUPPORTERS_CONTENT,
  WHO_WE_ARE_BLOCK_CONTENT,
  WORK_WITH_US_CONTENT,
} from '../content/landing';
import { appTheme } from '../themes';

const Home: NextPage = () => {
  return (
    <LandingLayout
      isLanding={true}
      seo={{
        title: 'Nomic Foundation',
        description: 'A non-profit dedicated to Ethereum developers',
      }}
      bodyBg={appTheme.light.colors.pageBackground}
    >
      <HeroBlock content={HERO_BLOCK_CONTENT} />
      <WhoWeAre content={WHO_WE_ARE_BLOCK_CONTENT} />
      <Projects content={PROJECTS_BLOCK_CONTENT} />
      <WorkWithUs content={WORK_WITH_US_CONTENT} />
      <SupportersBlock content={SUPPORTERS_CONTENT} />
    </LandingLayout>
  );
};

export default Home;

import type { NextPage } from 'next';
import HeroBlock from '../components/landingBlocks/HeroBlock';
import Projects from '../components/landingBlocks/ProjectsBlock';
import WhoWeAre from '../components/landingBlocks/WhoWeAreBlock';
import WorkWithUs from '../components/landingBlocks/WorkWithUsBlock';
import LandingLayout from '../components/LandingLayout';
import {
  HERO_BLOCK_CONTENT,
  PROJECTS_BLOCK_CONTENT,
  WHO_WE_ARE_BLOCK_CONTENT,
  WORK_WITH_US_CONTENT,
} from '../content/landing';

const Home: NextPage = () => {
  return (
    <LandingLayout
      seo={{
        title: 'Nomic Foundation',
        description: 'Empowering developers to decentralize the world',
      }}
    >
      <HeroBlock content={HERO_BLOCK_CONTENT} />
      <WhoWeAre content={WHO_WE_ARE_BLOCK_CONTENT} />
      <Projects content={PROJECTS_BLOCK_CONTENT} />
      <WorkWithUs content={WORK_WITH_US_CONTENT} />
    </LandingLayout>
  );
};

export default Home;

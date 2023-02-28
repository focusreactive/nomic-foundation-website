import type { NextPage } from 'next';
import HeroBlock from '../components/landingBlocks/HeroBlock';
import LandingLayout from '../components/LandingLayout';
import { HERO_BLOCK_CONTENT } from '../content/landing';

const Home: NextPage = () => {
  return (
    <LandingLayout
      seo={{
        title: 'Nomic Foundation',
        description: 'Empowering developers to decentralize the world',
      }}
    >
      <HeroBlock content={HERO_BLOCK_CONTENT} />
    </LandingLayout>
  );
};

export default Home;

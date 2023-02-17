import type { NextPage } from 'next';
import LandingLayout from '../components/LandingLayout';

const Home: NextPage = () => {
  return (
    <LandingLayout
      seo={{
        title: 'Nomic Foundation',
        description: 'Empowering developers to decentralize the world',
      }}
    >
      page
    </LandingLayout>
  );
};

export default Home;

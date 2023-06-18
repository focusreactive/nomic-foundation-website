import { styled } from '@linaria/react';
import type { NextPage } from 'next';
import { useEffect } from 'react';

import LandingLayout from '../components/LandingLayout';
import { appTheme, media, tmSelectors } from '../themes';

const JobsContainer = styled.section`
  position: relative;
  width: 100%;
`;


const AshbyJobBoardEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://jobs.ashbyhq.com/nomic.foundation/embed";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [])

  return <div id="ashby_embed" />
}

const Jobs: NextPage = () => {
  return (
    <LandingLayout
      seo={{
        title: 'Nomic Foundation',
        description: 'Empowering developers to decentralize the world',
      }}
    >
      <JobsContainer>
        <AshbyJobBoardEmbed />
      </JobsContainer>
    </LandingLayout>
  );
};

export default Jobs;

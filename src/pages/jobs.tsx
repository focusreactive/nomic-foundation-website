import { styled } from '@linaria/react';
import type { NextPage } from 'next';
import { useEffect } from 'react';

import LandingLayout from '../components/LandingLayout';
import { appTheme, media, tmSelectors } from '../themes';

const JobsContainer = styled.section`
  position: relative;
  width: 952px;

  ${media.brp1792} {
    width: 790px;
  }
  ${media.brp1440} {
    width: 870px;
  }
  ${media.brp1280} {
    width: 714px;
  }
  ${media.brp1024} {
    width: 544px;
  }
  ${media.brp768} {
    width: 312px;
  }
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
      isLanding={false}
      seo={{
        title: 'Nomic Foundation',
        description: 'A non-profit dedicated to Ethereum developers',
      }}
    >
      <JobsContainer>
        <AshbyJobBoardEmbed />
      </JobsContainer>
    </LandingLayout>
  );
};

export default Jobs;

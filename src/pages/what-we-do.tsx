import { styled } from '@linaria/react';
import type { NextPage } from 'next';

import LandingLayout from '../components/LandingLayout';
import { appTheme, media, tmSelectors } from '../themes';

const WhatWeDoContainer = styled.section`
  position: relative;
  max-width: 952px;

  ${media.brp1792} {
    max-width: 790px;
    font-size: 19px;
  }
  ${media.brp1440} {
    max-width: 870px;
    font-size: 16px;
  }
  ${media.brp1280} {
    max-width: 714px;
  }
  ${media.brp1024} {
    max-width: 544px;
    font-size: 14px;
  }
  ${media.brp768} {
    max-width: 312px;
    font-size: 14px;
  }
`;

const WhatWeDoContentSection = styled.section`
  z-index: 1;
  padding: 42px 0px 0px;
  width: 100%;
  min-width: min-content;
  max-width: 100%;
`;

const WhatWeDoTitle = styled.h1`
  font-weight: 400;
  font-size: 57px;
  line-height: 71.25px;
  padding-bottom: 32px;

  background: ${appTheme.light.colors.titleBg};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  ${tmSelectors.dark} {
    background: ${appTheme.dark.colors.titleBg};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  ${media.brp1792} {
    font-size: 48px;
    line-height: 60px;
  }
  ${media.brp1440} {
    font-size: 40px;
    line-height: 50px;
  }
  ${media.brp1024} {
    font-size: 33px;
    line-height: 41.25px;
  }
  ${media.brp768} {
    font-size: 28px;
    line-height: 36.4px;
    padding-bottom: 24px;
  }
`;

const WhatWeDoParagraph = styled.p`
  font-weight: 200;
  font-size: 23px;
  line-height: 32.2px;
  letter-spacing: 0.03em;
  color: ${appTheme.light.colors.font150};

  padding-bottom: 16px;

  ${media.brp1792} {
    font-size: 19px;
    line-height: 28.5px;
  }
  ${media.brp1440} {
    font-size: 16px;
    line-height: 24px;
  }
  ${media.brp1024} {
    font-size: 14px;
    line-height: 21px;
  }

  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font250};
  }
`;

const WhatWeDoSectionTitle = styled.h2`
  font-weight: 400;
  font-size: 28px;
  line-height: 39.2px;
  padding-top: 16px;
  padding-bottom: 8px;

  color: ${appTheme.light.colors.font150};
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font250};
  }

  ${media.brp1440} {
    font-size: 23px;
    line-height: 32.2px;
  }
  ${media.brp1024} {
    font-size: 20px;
    line-height: 30px;
  }
  ${media.brp768} {
    font-size: 19px;
    line-height: 28.5px;
    padding-top: 8px;
  }
`;

const Link = styled.a`
  text-decoration: underline;
  color: ${appTheme.light.colors.link};
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.link};
  }
`

const WhatWeDo: NextPage = () => {
  return (
    <LandingLayout
      isLanding={false}
      seo={{
        title: 'Nomic Foundation',
        description: 'Empowering developers to decentralize the world',
      }}
    >
      <WhatWeDoContainer>
        <WhatWeDoContentSection>
          <WhatWeDoTitle>What we do</WhatWeDoTitle>
          <WhatWeDoParagraph>
            The Nomic Foundation is helping create a more decentralized world that empowers individuals with greater autonomy and choice. As a software development platform, <Link href="https://ethereum.org/en/learn/" target="_blank">Ethereum</Link> can become a foundational component of this future, which is why we are solely focused on supporting its growth.
          </WhatWeDoParagraph>
          <WhatWeDoParagraph>
            As an early-stage non-profit, we provide open-source engineering software which advances the Ethereum ecosystem. Our ultimate goal is to ensure that Ethereum continues to deliver a top-quality, reliable developer experience as part of its software development platform, both today and in the future. We believe that by doing so, we can help Ethereum and the broader decentralized movement achieve their full potential and create a world where increased autonomy and choice are available to millions of people.
          </WhatWeDoParagraph>
          <WhatWeDoSectionTitle>
            A Developer-Focused Approach to Growing the <Link href="https://ethereum.foundation/infinitegarden" target="_blank">Infinite Garden</Link>
          </WhatWeDoSectionTitle>
          <WhatWeDoParagraph>
            Developers are essential to the continued success of the Ethereum platform, and we are committed to empowering them through two distinct approaches.
          </WhatWeDoParagraph>
          <WhatWeDoParagraph>
            Our first approach is to provide open-source developer tools to meet current engineering needs. Through our Hardhat suite of products, we equip developers with the necessary tools to succeed in the present.
          </WhatWeDoParagraph>
          <WhatWeDoParagraph>
            Our second approach focuses on the larger open-source ecosystem and the meta-infrastructure necessary for its continued evolution. By working on compilers (Slang) and runtimes (Rethnet), we aim to improve the quality of the meta-infrastructure available for the development of new tools and infrastructure.
          </WhatWeDoParagraph>
          <WhatWeDoParagraph>
            Together, these approaches ensure that Ethereum continues to offer a leading developer experience that meets today’s needs and those of tomorrow.
          </WhatWeDoParagraph>
        </WhatWeDoContentSection>
      </WhatWeDoContainer>
    </LandingLayout>
  );
};

export default WhatWeDo;

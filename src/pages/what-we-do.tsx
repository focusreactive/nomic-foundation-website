import { styled } from '@linaria/react';
import type { NextPage } from 'next';

import PageLayout from '../components/PageLayout';
import { appTheme, media, tmSelectors } from '../themes';

const WhatWeDoContainer = styled.section`
  position: relative;
  width: 100%;
`;

const WhatWeDoContentSection = styled.section`
  z-index: 1;
  padding: 42px 0px 0px;
  width: 100%;
  min-width: min-content;
  max-width: 100%;
  ${media.brp1792} {
    padding: 40px 0px 0px;
  }
  ${media.brp1280} {
    padding: 32px 0px 0px;
  }
  ${media.brp1024} {
    padding: 16px 0px 0px;
  }
  ${media.brp768} {
    padding: 16px 0px 0px;
  }
`;

const WhatWeDoTitle = styled.h1`
  font-weight: 400;
  font-size: 57px;
  line-height: 125%;
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
  ${media.brp1440} {
    font-size: 48px;
    line-height: 125%;
  }
  ${media.brp1280} {
    font-size: 40px;
    line-height: 125%;
  }
  ${media.brp768} {
    font-size: 33px;
    line-height: 125%;
  }
  ${media.brp360} {
    font-size: 28px;
    line-height: 125%;
    padding-bottom: 24px;
  }
`;

const WhatWeDoParagraph = styled.p`
  font-weight: 300;
  font-size: 23px;
  line-height: 140%;
  letter-spacing: 0.03em;
  color: ${appTheme.light.colors.font150};

  padding-bottom: 16px;

  ${media.brp1440} {
    font-size: 19px;
    line-height: 150%;
  }
  ${media.brp1280} {
    font-size: 16px;
    line-height: 150%;
  }
  ${media.brp768} {
    font-size: 14px;
    line-height: 150%;
  }
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font250};
  }
`;

const WhatWeDoSectionTitle = styled.h2`
  font-weight: 400;
  font-size: 28px;
  line-height: 140%;

  padding-top: 16px;
  padding-bottom: 8px;

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
  ${media.brp1280} {
    font-size: 23px;
    line-height: 140%;
  }
  ${media.brp768} {
    font-size: 20px;
    line-height: 150%;
  }
  ${media.brp360} {
    font-size: 19px;
    line-height: 150%;
    padding-top: 8px;
  }
`;

const HeroPictureSection = styled.section`
  position: absolute;
  width: 100%;
`;

const HeroPictureWrapper = styled.section`
  --k: 1;
  position: absolute;
  right: -14%;
  top: 0;
  margin-top: calc(var(--k)* -420px);
  margin-right: calc(var(--k)* -875px);
  & .light {
    display: block;
  }
  & .dark {
    display: none;
  }

  ${tmSelectors.dark} {
    & .light {
      display: none;
    }
    & .dark {
      display: block;
    }
  }
  transform-origin: top right;
  transform: scale(var(--k));
  ${media.brp1440} {
    --k: 0.9;
  }
  ${media.brp1280} {
    --k: 0.8;
  }
  ${media.brp1024} {
    --k: 0.6;
    right: -100px
  }


  ${media.brp768} {
    display: none;
  }
`;

const HeroMobilePictureWrapper = styled.section`
  position: absolute;
  right: 0;
  top: 0;
  display: none;
  margin-top: -208px;
  margin-right: -255px;
  & .light {
    display: block;
  }
  & .dark {
    display: none;
    margin-right: -20px;
  }

  ${tmSelectors.dark} {
    & .light {
      display: none;
    }
    & .dark {
      display: block;
    }
  }
  ${media.brp768} {
    display: block;
  }
`;

const Link = styled.a`
  text-decoration: underline;
  text-decoration-color: ${appTheme.light.colors.font150};
  ${tmSelectors.dark} {
    text-decoration-color: ${appTheme.dark.colors.font250};
  }
`

const CTAWrapper = styled.div`
  margin-top: 40px;
  ${media.brp1024} {
    margin-top: 16px;
  }
`;

const WhatWeDo: NextPage = () => {
  return (
    <PageLayout
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
    </PageLayout>
  );
};

export default WhatWeDo;

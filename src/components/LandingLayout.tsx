import { SEOType } from '../types/commonTypes';
import { styled } from '@linaria/react';
import SEO from './SEO';
import { bannerContent } from '../config';
import TopBanner from './ui/TopBanner';
import { appTheme, media, ThemeProvider, tmSelectors } from '../themes';
import { Header, HeaderBg } from './ui/styled/DesktopMenu.styled';
import LandingNavigation from './LandingNavigation';
import LandingFooter from './ui/LandingFooter';
import { FOOTER_CONTENT } from '../content/landing';
import { useEffect, useState } from 'react';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  transition: all 0.25s ease-in-out;
  main {
    background: ${appTheme.light.colors.pageBackground};
    overflow-x: hidden;
    padding-top: 136px;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    ${tmSelectors.dark} {
      background: ${appTheme.dark.colors.pageBackground};
    }
  }
  min-width: 320px;
`;

type Props = React.PropsWithChildren<{
  seo: SEOType;
}>;

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  ${media.brp1792} {
    max-width: 1200px;
  }
  ${media.brp1440} {
    max-width: 1040px;
  }
  ${media.brp1280} {
    max-width: 912px;
  }
  ${media.brp1024} {
    max-width: 672px;
  }
  ${media.brp768} {
    max-width: 452px;
  }
  ${media.brp500} {
    max-width: 380px;
  }
  ${media.brp428} {
    max-width: 312px;
  }
`;

const LandingLayout = ({ children, seo }: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 600);
      setPrevScrollPos(currentScrollPos);
      setBackgroundOpacity((currentScrollPos * 1.5) / window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <ThemeProvider>
      <Container className='landing'>
        <Header
          className={isVisible ? '' : 'hidden'}
          backgroundOpacity={backgroundOpacity}
        >
          <HeaderBg className={'blur'} />
          <TopBanner content={bannerContent} />
          <LandingNavigation />
        </Header>
        <SEO seo={seo} />
        <main id='main'>
          <ContentContainer>{children}</ContentContainer>
          <LandingFooter content={FOOTER_CONTENT} />
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default LandingLayout;

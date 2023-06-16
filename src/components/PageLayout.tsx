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
  align-items: center;
  -webkit-font-smoothing: antialiased;
  transition: all 0.25s ease-in-out;
  main {
    background: ${appTheme.light.colors.pageBackground};
    overflow-x: hidden;
    padding-top: 136px;
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
  max-width: 952px;
  ${media.brp1792} {
    max-width: 790px;
  }
  ${media.brp1440} {
    max-width: 870px;
  }
  ${media.brp1280} {
    max-width: 714px;
  }
  ${media.brp1024} {
    max-width: 544px;
  }
  ${media.brp768} {
    max-width: 312px;
  }
`;

const PageLayout = ({ children, seo }: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 600);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <ThemeProvider>
      <Container className='landing'>
        <Header
          className={isVisible ? '' : 'hidden'}
          backgroundOpacity={1}
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

export default PageLayout;

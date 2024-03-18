import { SEOType } from '../types/commonTypes';
import { styled } from '@linaria/react';
import SEO from './SEO';
import { bannerContent } from '../config';
import TopBanner from './ui/TopBanner';
import { appTheme, breakpoints, media, ThemeProvider, tmSelectors } from '../themes';
import { Header, HeaderBg, HeaderWrapper } from './ui/styled/DesktopMenu.styled';
import LandingNavigation from './LandingNavigation';
import LandingFooter from './ui/LandingFooter';
import { FOOTER_CONTENT } from '../content/landing';
import React, { useEffect, useState } from 'react';
import { cx } from 'linaria';
import { useScrollDirection } from '../hooks/useScrollDirection';
import useWindowSize from '../hooks/useWindowSize';

const Container = styled.div<{
  bodyBg?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  transition: all 0.25s ease-in-out;
  overflow: hidden;
  main {
    background: ${({ bodyBg }) => (bodyBg ? bodyBg : appTheme.light.colors.pageBackground)};
    overflow: hidden;
    padding-top: 106px;
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
  isLanding: boolean;
  seo: SEOType;
  bodyBg?: string;
}>;

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;

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

const LandingLayout = ({ children, seo, isLanding, bodyBg }: Props) => {
  const [fixed, setFixed] = useState(false);
  const [disableAnimation, setDisableAnimation] = useState(false);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const windowSize = useWindowSize();

  const headerHeight = windowSize.width < breakpoints.brp1024 ? 80 : 112;
  const topBarHeight = windowSize.width < breakpoints.brp1024 ? 46 : 55;
  const totalHeight = headerHeight + topBarHeight;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (scrollDirection === 'up') {
        currentScrollPos === 0 && setFixed(currentScrollPos > totalHeight);
      } else {
        if (!fixed && currentScrollPos > totalHeight) {
          setDisableAnimation(currentScrollPos > totalHeight);
          setTimeout(() => {
            setDisableAnimation(false);
          }, 200);
        }
        setFixed(currentScrollPos > totalHeight);
      }

      setIsHeaderVisible(scrollDirection === 'up');

      if (windowSize.width < breakpoints.brp1024) {
        setIsTopBarVisible(currentScrollPos < 10);
      } else {
        setIsTopBarVisible(currentScrollPos === 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [fixed, headerHeight, scrollDirection, totalHeight, windowSize.width]);

  return (
    <ThemeProvider>
      <Container
        className='landing'
        bodyBg={bodyBg}
      >
        <HeaderWrapper>
          <Header
            className={cx(
              fixed && 'fixed',
              disableAnimation && 'disable-animation',
              isTopBarVisible && 'visible-top-bar',
              (isHeaderVisible || isMobileMenuOpen) && 'visible-header'
            )}
          >
            <TopBanner content={bannerContent} />
            <HeaderBg className={'blur'} />
            <LandingNavigation
              isOpen={isMobileMenuOpen}
              setIsOpen={setIsMobileMenuOpen}
            />
          </Header>
        </HeaderWrapper>
        <SEO seo={seo} />
        <main id='main'>
          <ContentContainer>{children}</ContentContainer>
          <LandingFooter
            content={FOOTER_CONTENT}
            isLanding={isLanding}
          />
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default LandingLayout;

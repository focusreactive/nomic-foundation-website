import { SEOType } from '../types/commonTypes';
import { styled } from '@linaria/react';
import SEO from './SEO';
import { bannerContent } from '../config';
import TopBanner from './ui/TopBanner';
import {appTheme, breakpoints, media, ThemeProvider, tmSelectors} from '../themes';
import {Header, HeaderBg, HeaderWrapper} from './ui/styled/DesktopMenu.styled';
import LandingNavigation from './LandingNavigation';
import LandingFooter from './ui/LandingFooter';
import { FOOTER_CONTENT } from '../content/landing';
import { useEffect, useState } from 'react';
import {cx} from "linaria";
import {useScrollDirection} from "../hooks/useScrollDirection";
import useWindowSize from "../hooks/useWindowSize";

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
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [fixed, setFixed] = useState(false)
  const [animation, setAnimation] = useState(false)
  const [isTopBarVisible, setIsTopBarVisible] = useState(true)
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const scrollDirection = useScrollDirection()
  const windowSize = useWindowSize()

  const headerHeight = windowSize.width < breakpoints.brp1024 ? 80 : 96;
  const topBarHeight =  windowSize.width < breakpoints.brp1024 ? 46 : 55;
  const totalHeight = headerHeight + topBarHeight;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (scrollDirection === 'up') {
        currentScrollPos === 0 && setFixed(currentScrollPos > totalHeight)
      } else {
        setFixed(currentScrollPos > totalHeight)
      }
      setTimeout(() => {
        setAnimation(currentScrollPos > totalHeight)
      },100)
      setIsHeaderVisible(scrollDirection === 'up')
      setPrevScrollPos(currentScrollPos);
      setIsTopBarVisible(currentScrollPos === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <ThemeProvider>
      <TopBanner content={bannerContent} className={cx(isTopBarVisible && "visible-top-bar")} />
      <Container className='landing'>
        <Header
            className={cx(fixed && "fixed", animation && "animation", isHeaderVisible && "visible-header")}
        >
          <HeaderBg className={'blur'} />
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

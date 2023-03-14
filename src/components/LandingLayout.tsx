import { SEOType } from '../types/commonTypes';
import { styled } from '@linaria/react';
import SEO from './SEO';
import { bannerContent } from '../config';
import TopBanner from './ui/TopBanner';
import { appTheme, ThemeProvider, tmSelectors } from '../themes';
import { Header } from './ui/styled/DesktopMenu.styled';
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
  background: ${appTheme.light.colors.pageBackground};
  height: 100vh;
  main {
    overflow-x: hidden;
    padding-top: 136px;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  & #anchor {
    visibility: hidden;
    top: 0;
    left: 0;
  }
  min-width: 320px;
  ${tmSelectors.dark} {
    background: ${appTheme.dark.colors.pageBackground};
  }
`;

type Props = React.PropsWithChildren<{
  seo: SEOType;
}>;

const LandingLayout = ({ children, seo }: Props) => {
  const [headerClass, setHeaderClass] = useState<'blur' | 'fill' | ''>('');

  useEffect(() => {
    const main = document.getElementById('main');
    const anchor = document.getElementById('anchor');

    if (!main || !anchor) return;
    const changeBgState = () => {
      const rect = anchor.getBoundingClientRect();
      if (rect.y >= 100) {
        setHeaderClass('');
      } else if (rect.y <= -600) {
        setHeaderClass('fill');
      } else {
        setHeaderClass('blur');
      }
    };

    main.addEventListener('scroll', changeBgState);
    return () => {
      main.removeEventListener('scroll', changeBgState);
    };
  }, []);
  return (
    <ThemeProvider>
      <Container className='landing'>
        <Header className={headerClass}>
          <TopBanner content={bannerContent} />
          <LandingNavigation />
        </Header>
        <SEO seo={seo} />
        <main id='main'>
          <div id='anchor' />
          {children}
          <LandingFooter content={FOOTER_CONTENT} />
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default LandingLayout;

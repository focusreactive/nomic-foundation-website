import { SEOType } from '../types/commonTypes';
import { styled } from 'linaria/react';
import SEO from './SEO';
import { bannerContent } from '../config';
import TopBanner from './ui/TopBanner';
import { ThemeProvider } from '../themes';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  -webkit-font-smoothing: antialiased;
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
  min-width: 320px;
`;

type Props = React.PropsWithChildren<{
  seo: SEOType;
}>;

const LandingLayout = ({ children, seo }: Props) => {
  return (
    <ThemeProvider>
      <Container className='landing'>
        <TopBanner content={bannerContent} />
        <SEO seo={seo} />
        <main>{children}</main>
      </Container>
    </ThemeProvider>
  );
};

export default LandingLayout;

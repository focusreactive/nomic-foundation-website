import { SEOType } from '../types/commonTypes';
import { styled } from 'linaria/react';
import SEO from './SEO';

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
    <Container className='landing'>
      <SEO seo={seo} />
      <main>{children}</main>
    </Container>
  );
};

export default LandingLayout;

import HeroDeskDark from '../../assets/graphics/dark/hero-desk-dark';
import HeroDesk from '../../assets/graphics/light/hero-desk';
import { CTAContent } from '../../types/commonTypes';
import {
  HeroBlockContainer,
  HeroBlockContentSection,
  HeroBlockPictureSection,
  HeroBlockPictureWrapper,
} from './styled/HeroBlock.styled';

type Props = {
  content: {
    cta: CTAContent;
    title: string;
    subtitle: string;
  };
};

const HeroBlock = ({ content }: Props) => {
  return (
    <HeroBlockContainer>
      <HeroBlockContentSection>content</HeroBlockContentSection>

      <HeroBlockPictureSection>
        <HeroBlockPictureWrapper>
          <HeroDesk className='light' />
          <HeroDeskDark className='dark' />
        </HeroBlockPictureWrapper>
      </HeroBlockPictureSection>
    </HeroBlockContainer>
  );
};

export default HeroBlock;

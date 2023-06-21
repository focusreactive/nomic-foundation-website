import HeroDeskDark from '../../assets/graphics/dark/hero-desk-dark';
import HeroMobileDark from '../../assets/graphics/dark/hero-mobile-dark';
import HeroDesk from '../../assets/graphics/light/hero-desk';
import HeroMobile from '../../assets/graphics/light/hero-mobile';
import { CTAContent } from '../../types/commonTypes';
import { Button } from '../ui/Button';
import {
  CTAWrapper,
  HeroBlockContainer,
  HeroBlockContentSection,
  HeroBlockMobilePictureWrapper,
  HeroBlockPictureSection,
  HeroBlockPictureWrapper,
  HeroBlockSubtitle,
  HeroBlockTitle,
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
      <HeroBlockContentSection>
        <HeroBlockTitle dangerouslySetInnerHTML={{__html: content.title}} />
        <HeroBlockSubtitle>{content.subtitle}</HeroBlockSubtitle>
        <CTAWrapper>
          <Button href={content.cta.href} label={content.cta.label} />
        </CTAWrapper>
      </HeroBlockContentSection>

      <HeroBlockPictureSection>
        <HeroBlockPictureWrapper>
          <HeroDesk className='light' />
          <HeroDeskDark className='dark' />
        </HeroBlockPictureWrapper>
        <HeroBlockMobilePictureWrapper>
          <HeroMobile className='light' />
          <HeroMobileDark className='dark' />
        </HeroBlockMobilePictureWrapper>
      </HeroBlockPictureSection>
    </HeroBlockContainer>
  );
};

export default HeroBlock;

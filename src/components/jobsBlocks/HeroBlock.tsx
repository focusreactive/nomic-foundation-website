import { CTAContent } from '../../types/commonTypes';
import { Button } from '../ui/Button';
import Image from 'next/image';
import {
  CTAWrapper,
  HeroBlockPictures,
  HeroBlockContent,
  HeroBlockSubtitle,
  HeroBlockTitle,
  HeroBlockSection,
  HeroBlockText,
  HeroBlockPictureLarge,
  HeroBlockPictureHorizontal,
  HeroBlockPictureVertical,
} from './styled/HeroBlock.styled';

type Props = {
  content: {
    cta: CTAContent;
    title: string;
    subtitle: string;
    text: string;

    imgLarge: {
      src: string;
      alt: string;
    };
    imgVertical: {
      src: string;
      alt: string;
    };
    imgHorizontal: {
      src: string;
      alt: string;
    };
  };
};

const HeroBlock = ({ content }: Props) => {
  return (
    <HeroBlockSection>
      <HeroBlockContent>
        <HeroBlockSubtitle>{content.subtitle}</HeroBlockSubtitle>
        <HeroBlockTitle>{content.title}</HeroBlockTitle>
        <HeroBlockText>{content.text}</HeroBlockText>
        <CTAWrapper>
          <Button
            href={content.cta.href}
            label={content.cta.label}
            className='small'
          />
        </CTAWrapper>
      </HeroBlockContent>

      <HeroBlockPictures>
        <HeroBlockPictureLarge>
          <Image
            src={content.imgLarge.src}
            alt={content.imgLarge.alt}
            width={638}
            height={366}
          />
        </HeroBlockPictureLarge>
        <HeroBlockPictureHorizontal>
          <Image
            src={content.imgHorizontal.src}
            alt={content.imgHorizontal.alt}
            width={283}
            height={181}
          />
        </HeroBlockPictureHorizontal>
        <HeroBlockPictureVertical>
          <Image
            src={content.imgVertical.src}
            alt={content.imgVertical.alt}
            width={221}
            height={282}
          />
        </HeroBlockPictureVertical>
      </HeroBlockPictures>
    </HeroBlockSection>
  );
};

export default HeroBlock;

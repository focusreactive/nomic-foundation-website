import WhoWeAreDeskDarkTexture from '../../assets/graphics/dark/who-we-desk-dark';
import WhoWeAreMobilePictureDark from '../../assets/graphics/dark/who-we-mobile-dark';
import WhoWeAreDeskTexture from '../../assets/graphics/light/who-we-desk';
import WhoWeAreMobilePicture from '../../assets/graphics/light/who-we-mobile';
import { CTAContent } from '../../types/commonTypes';
import { Button } from '../ui/Button';

import {
  CTAWrapper,
  WhoWeAreContainer,
  WhoWeAreContent,
  WhoWeAreMobilePictureWrapper,
  WhoWeArePicture,
  WhoWeArePictureWrapper,
  WhoWeAreText,
} from './styled/WhoWeAreBlock.styled';

type Props = {
  content: {
    cta: CTAContent;
    text: string;
  };
};

const WhoWeAre = ({ content }: Props) => {
  return (
    <WhoWeAreContainer>
      <WhoWeAreContent>
        <WhoWeAreText dangerouslySetInnerHTML={{ __html: content.text }} />
        <CTAWrapper>
          <Button href={content.cta.href} label={content.cta.label} />
        </CTAWrapper>
      </WhoWeAreContent>
      <WhoWeArePicture>
        <WhoWeArePictureWrapper>
          <WhoWeAreDeskTexture className='light' />
          <WhoWeAreDeskDarkTexture className='dark' />
        </WhoWeArePictureWrapper>
        <WhoWeAreMobilePictureWrapper>
          <WhoWeAreMobilePicture className='light' />
          <WhoWeAreMobilePictureDark className='dark' />
        </WhoWeAreMobilePictureWrapper>
      </WhoWeArePicture>
    </WhoWeAreContainer>
  );
};

export default WhoWeAre;

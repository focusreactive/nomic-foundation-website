import WorkWithUsDeskDark from '../../assets/graphics/dark/work-with-us-dark';
import WorkWithUsDesk from '../../assets/graphics/light/work-with-us-desk';
import { CTAContent } from '../../types/commonTypes';
import { Button } from '../ui/Button';
import {
  CTAWrapper,
  WorkWithUsContainer,
  WorkWithUsPicture,
  WorkWithUsPictureWrapper,
  WorkWithUsText,
  WorkWithUsTitle,
} from './styled/WorkWithUsBlock.styled';

type Props = {
  content: {
    title: string;
    text: string;
    cta: CTAContent;
  };
};

const WorkWithUs = ({ content }: Props) => {
  return (
    <WorkWithUsContainer>
      <WorkWithUsPicture>
        <WorkWithUsPictureWrapper>
          <WorkWithUsDesk className='light' />
          <WorkWithUsDeskDark className='dark' />
        </WorkWithUsPictureWrapper>
        {/* <WorkWithUsMobilePictureWrapper>
          <WorkWithUsMobilePicture className='light' />
          <WorkWithUsMobilePictureDark className='dark' />
        </WorkWithUsMobilePictureWrapper> */}
      </WorkWithUsPicture>
      <WorkWithUsTitle>{content.title}</WorkWithUsTitle>
      <WorkWithUsText>{content.text}</WorkWithUsText>
      <CTAWrapper>
        <Button href={content.cta.href} label={content.cta.label} />
      </CTAWrapper>
    </WorkWithUsContainer>
  );
};

export default WorkWithUs;

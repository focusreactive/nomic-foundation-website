import React from 'react';
import ContainerSection from '../Container';

import {
  FaqBlockPictureWrapperLeft,
  FaqBlockPictureWrapperRight,
  FaqBlockSection,
  FaqBlockItems,
} from './styled/FaqBlock.styled';

import FaqLeft from '../../assets/graphics/light/faq-left';
import FaqRight from '../../assets/graphics/light/faq-right';
import FaqLeftDark from '../../assets/graphics/dark/faq-left-dark';
import FaqRightDark from '../../assets/graphics/dark/faq-right-dark';
import Spoller from '../ui/Spoller';

type Props = {
  content: {
    title: string;
    questions: Faq[];
  };
};

type Faq = {
  title: string;
  text: string;
};

const FaqBlock = ({ content }: Props) => {
  return (
    <>
      <FaqBlockSection>
        <ContainerSection title={content.title}>
          <FaqBlockItems>
            {content.questions.map(({ title, text }, index) => (
              <Spoller
                title={title}
                key={index}
              >
                {text}
              </Spoller>
            ))}
          </FaqBlockItems>
          <FaqBlockPictureWrapperLeft>
            <FaqLeft className='light ' />
            <FaqLeftDark className='dark ' />
          </FaqBlockPictureWrapperLeft>
          <FaqBlockPictureWrapperRight>
            <FaqRight className='light ' />
            <FaqRightDark className='dark ' />
          </FaqBlockPictureWrapperRight>
        </ContainerSection>
      </FaqBlockSection>
    </>
  );
};

export default FaqBlock;

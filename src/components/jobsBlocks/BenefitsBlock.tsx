import React from 'react';
import ContainerSection from '../Container';

import {
  BenefitsBlockSection,
  BenefitsBlockPictureWrapper,
  BenefitsBlockItems,
  BenefitsBlockItem,
  BenefitsBlockItemPicture,
  BenefitsBlockItemTitlte,
} from './styled/BenefitsBlock.styled';
import Benefits from '../../assets/graphics/light/benefits';
import BenefitsDark from '../../assets/graphics/dark/benefits-dark';

type Props = {
  content: {
    title: string;
    items: Benefit[];
  };
};

type Benefit = {
  title: string;
  Picture: React.FC<React.SVGProps<SVGSVGElement>>;
  PictureDark: React.FC<React.SVGProps<SVGSVGElement>>;
};

const WhyNomicBlock = ({ content }: Props) => {
  return (
    <>
      <BenefitsBlockSection>
        <ContainerSection title={content.title}>
          <BenefitsBlockItems>
            {content.items.map(({ Picture, PictureDark, title }, index) => (
              <BenefitsBlockItem key={index}>
                <BenefitsBlockItemPicture>
                  <Picture className='light' />
                  <PictureDark className='dark' />
                </BenefitsBlockItemPicture>
                <BenefitsBlockItemTitlte>{title}</BenefitsBlockItemTitlte>
              </BenefitsBlockItem>
            ))}
          </BenefitsBlockItems>
        </ContainerSection>
        <BenefitsBlockPictureWrapper>
          <Benefits className='light' />
          <BenefitsDark className='dark' />
        </BenefitsBlockPictureWrapper>
      </BenefitsBlockSection>
    </>
  );
};

export default WhyNomicBlock;

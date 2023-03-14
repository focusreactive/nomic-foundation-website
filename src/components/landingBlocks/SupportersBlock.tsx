import { SVGProps } from 'react';
import SupportersDeskDark from '../../assets/graphics/dark/supporters-desk-dark';
import SupportersDesk from '../../assets/graphics/light/supporters-desk';
import {
  LogoItemWrapper,
  SupportersBlockContainer,
  SupportersBlockLogosContainer,
  SupportersBlockTitle,
  SupportersPictureWrapper,
} from './styled/SupportersBlock.styled';

type Props = {
  content: {
    title: string;
    logos: React.FC<SVGProps<SVGSVGElement>>[];
  };
};

const SupportersBlock = ({ content }: Props) => {
  return (
    <SupportersBlockContainer>
      <SupportersPictureWrapper>
        <SupportersDesk className='light' />
        <SupportersDeskDark className='dark' />
      </SupportersPictureWrapper>
      <SupportersBlockTitle>{content.title}</SupportersBlockTitle>
      <SupportersBlockLogosContainer>
        {content.logos.map((Logo) => (
          <LogoItemWrapper key={Logo.name}>
            <Logo />
          </LogoItemWrapper>
        ))}
      </SupportersBlockLogosContainer>
    </SupportersBlockContainer>
  );
};

export default SupportersBlock;

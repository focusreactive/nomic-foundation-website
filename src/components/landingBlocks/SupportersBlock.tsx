import { SVGProps } from 'react';
import SupportersDeskDark from '../../assets/graphics/dark/supporters-desk-dark';
import SupportersDesk from '../../assets/graphics/light/supporters-desk';
import useWindowSize from '../../hooks/useWindowSize';
import { breakpoints } from '../../themes';
import {
  LogoItemWrapper,
  LogosRow,
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

const splitIntoChunks = (
  array: Array<any>,
  chunkSize: number
): Array<Array<any>> => {
  const arrayOfChunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    arrayOfChunks.push(chunk);
  }

  return arrayOfChunks;
};

const SupportersBlock = ({ content }: Props) => {
  const { width } = useWindowSize();

  const chunkSize = width >= breakpoints.smd ? 5 : 3;

  return (
    <SupportersBlockContainer>
      <SupportersPictureWrapper>
        <SupportersDesk className='light' />
        <SupportersDeskDark className='dark' />
      </SupportersPictureWrapper>
      <SupportersBlockTitle>{content.title}</SupportersBlockTitle>
      <SupportersBlockLogosContainer>
        {splitIntoChunks(content.logos, chunkSize).map((chunkLogos, index) => {
          return (
            <LogosRow key={index}>
              {chunkLogos.map((Logo) => (
                <LogoItemWrapper key={Logo.name}>
                  <Logo />
                </LogoItemWrapper>
              ))}
            </LogosRow>
          );
        })}
      </SupportersBlockLogosContainer>
    </SupportersBlockContainer>
  );
};

export default SupportersBlock;

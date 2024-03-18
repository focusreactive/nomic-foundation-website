import WhyNomicDark from '../../assets/graphics/dark/why-nomic-dark';
import WhyNomic from '../../assets/graphics/light/why-nomic';
import Arrow from '../ui/Arrow';
import ContainerSection from '../Container';
import {
  WhyNomicBlockSection,
  WhyNomicBlockItems,
  WhyNomicBlockItem,
  WhyNomicBlockItemTitlte,
  WhyNomicBlockItemText,
  WhyNomicBlockPictureWrapper,
} from './styled/WhyNomicBlock.styled';

type Props = {
  content: {
    title: string;
    items: WhyNomicItems[];
  };
};

type WhyNomicItems = {
  title: string;
  text: string;
};

const WhyNomicBlock = ({ content }: Props) => {
  return (
    <WhyNomicBlockSection>
      <ContainerSection title={content.title}>
        <WhyNomicBlockItems>
          {content.items.map((item, index) => (
            <WhyNomicBlockItem key={index}>
              <WhyNomicBlockItemTitlte>
                <Arrow />
                {item.title}
              </WhyNomicBlockItemTitlte>
              <WhyNomicBlockItemText>{item.text}</WhyNomicBlockItemText>
            </WhyNomicBlockItem>
          ))}
        </WhyNomicBlockItems>
      </ContainerSection>
      <WhyNomicBlockPictureWrapper>
        <WhyNomic className='light' />
        <WhyNomicDark className='dark' />
      </WhyNomicBlockPictureWrapper>
    </WhyNomicBlockSection>
  );
};

export default WhyNomicBlock;

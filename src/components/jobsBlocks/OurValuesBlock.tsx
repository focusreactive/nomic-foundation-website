import ContainerSection from '../Container';
import {
  OurValuesBlockSection,
  OurValuesBlockItems,
  OurValuesBlockItem,
  OurValuesBlockItemTitlte,
  OurValuesBlockItemText,
} from './styled/OurValuesBlock.styled';

type Props = {
  content: {
    title: string;
    items: OurValuesItems[];
  };
};

type OurValuesItems = {
  title: string;
  text: string;
};

const OurValuesBlock = ({ content }: Props) => {
  return (
    <OurValuesBlockSection>
      <ContainerSection title={content.title}>
        <OurValuesBlockItems>
          {content.items.map((item, index) => (
            <OurValuesBlockItem key={index}>
              <OurValuesBlockItemTitlte>{item.title}</OurValuesBlockItemTitlte>
              <OurValuesBlockItemText>{item.text}</OurValuesBlockItemText>
            </OurValuesBlockItem>
          ))}
        </OurValuesBlockItems>
      </ContainerSection>
    </OurValuesBlockSection>
  );
};

export default OurValuesBlock;

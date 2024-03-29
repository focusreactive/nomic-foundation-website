import { Container, ContainerTitle, ContainerTitleGradient } from './styled/Container.styled';

type Props = {
  children: React.ReactNode;
  title?: string;
};

const ContainerSection = ({ children, title }: Props) => {
  return (
    <Container>
      {title && (
        <ContainerTitle>
          <ContainerTitleGradient>{title}</ContainerTitleGradient>
        </ContainerTitle>
      )}
      {children}
    </Container>
  );
};

export default ContainerSection;

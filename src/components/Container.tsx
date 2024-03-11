import { Container, ContainerTitle } from './styled/Container.styled';

type Props = {
  children: React.ReactNode;
  title?: string;
};

const ContainerSection = ({ children, title }: Props) => {
  return (
    <Container>
      {title && <ContainerTitle>{title}</ContainerTitle>}
      {children}
    </Container>
  );
};

export default ContainerSection;

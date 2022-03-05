import { Container } from "./styles";

const Card = ({ children, id }: any) => (
  <Container data-testid={id} id={id}>
    {children}
  </Container>
);

export default Card;

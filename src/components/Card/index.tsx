import { Container } from "./styles";

const Card = ({ children, id }: any) => (
  <Container id={id}>{children}</Container>
);

export default Card;

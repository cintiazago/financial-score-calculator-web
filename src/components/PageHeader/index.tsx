import { Container, Logo } from "./styles";

export function PageHeader() {
  return (
    <Container data-testid="page-header-container">
      <Logo src="./src/assets/images/logoOrigin.png" />
    </Container>
  );
}

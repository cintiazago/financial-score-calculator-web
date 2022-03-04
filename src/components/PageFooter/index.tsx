import { FiLock } from "react-icons/fi";
import { Container, Disclaimer } from "./styles";

export function PageFooter() {
  return (
    <Container>
      <FiLock size={"24px"} color={"#708797"} />
      <Disclaimer>
        Your financial information is encrypted and secure. We'll never share or
        sell any of your personal data.
      </Disclaimer>
    </Container>
  );
}

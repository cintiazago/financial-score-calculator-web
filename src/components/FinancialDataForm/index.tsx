import { HtmlHTMLAttributes, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScoreStatuses } from "../../types/score";

import Card from "../Card";
import Title from "../Title";
import {
  Container,
  Header,
  Logo,
  TitleWrapper,
  CardTitle,
  CardSubtitle,
  Content,
  ButtonContainer,
  Button,
  Input,
} from "./styles";

const YEARLY_TAXES_PERCENTAGE = 8;
const MONTHS = 12;
const HEALTHY_LIMIT_PERCENTAGE = 25;
const MEDIUM_LIMIT_PERCENTEGE = 75;

export function FinancialDataForm() {
  const navigate = useNavigate();
  const [annualIncome, setAnnualIncome] = useState<number>(0);
  const [monthlyCosts, setMonthlyCosts] = useState<number>(0);
  const [score, setScore] = useState("");

  const handleContinueToGetScore = () => {
    navigate("result", { state: { score: score } });
  };

  const handleSetAnnualIncome = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnnualIncome(parseFloat(e.target.value));
  };

  const handlesetMonthlyCosts = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonthlyCosts(parseFloat(e.target.value));
  };

  useEffect(() => {
    if (!annualIncome) setAnnualIncome(0);
    if (!monthlyCosts) setMonthlyCosts(0);

    const annualIncomeNet =
      annualIncome - annualIncome * (YEARLY_TAXES_PERCENTAGE / 100);

    const annualCosts = monthlyCosts * MONTHS;

    const annualCostsPercentageOverIncome =
      (annualCosts / annualIncomeNet) * 100;

    if (annualCostsPercentageOverIncome <= HEALTHY_LIMIT_PERCENTAGE) {
      setScore(ScoreStatuses.HEALTHY);
    } else if (
      annualCostsPercentageOverIncome > HEALTHY_LIMIT_PERCENTAGE &&
      annualCostsPercentageOverIncome <= MEDIUM_LIMIT_PERCENTEGE
    ) {
      setScore(ScoreStatuses.MEDIUM);
    } else if (annualCostsPercentageOverIncome > MEDIUM_LIMIT_PERCENTEGE) {
      setScore(ScoreStatuses.LOW);
    } else {
      setScore(ScoreStatuses.UNKNOWN);
    }
  }, [annualIncome, monthlyCosts]);

  return (
    <Container>
      <Title>
        <h1>
          Let's find out your <span>financial wellness score.</span>
        </h1>
      </Title>

      <Card id="main-content-card">
        <Header>
          <Logo src={"./src/assets/images/OriginIcon--circle.png"} />
          <TitleWrapper>
            <CardTitle>Financial wellness test</CardTitle>
            <CardSubtitle>Enter your financial information below</CardSubtitle>
          </TitleWrapper>
        </Header>

        <Content>
          <Input>
            <label>Annual income</label>
            <input
              type="number"
              value={annualIncome}
              onChange={handleSetAnnualIncome}
            />
          </Input>

          <Input>
            <label>Monthly Costs</label>
            <input
              type="number"
              value={monthlyCosts}
              onChange={handlesetMonthlyCosts}
            />
          </Input>
        </Content>

        <ButtonContainer>
          <Button onClick={handleContinueToGetScore}>Continue</Button>
        </ButtonContainer>
      </Card>
    </Container>
  );
}

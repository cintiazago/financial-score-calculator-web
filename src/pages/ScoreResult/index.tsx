import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Card from "../../components/Card";
import { PageFooter } from "../../components/PageFooter";
import { PageHeader } from "../../components/PageHeader";
import ProgressBar from "../../components/ProgressBar";
import Title from "../../components/Title";
import { scoreObject } from "./Score";
import {
  ScoreItem,
  ScoreLocationState,
  ScoreStatuses,
} from "../../types/score";

import {
  Content,
  Logo,
  CartHeader,
  TitleWrapper,
  CardTitle,
  CardSubtitle,
  ButtonContainer,
  Button,
} from "./styles";

export function ScoreResult() {
  const [scoreValues, setScoreValues] = useState<ScoreItem>(
    scoreObject[ScoreStatuses.UNKNOWN]
  );
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as ScoreLocationState;

  const handleReturn = () => {
    navigate("/", { replace: true });
  };

  useEffect(() => {
    const item: ScoreItem = scoreObject[state.score];
    setScoreValues(item);
  }, []);

  return (
    <>
      <PageHeader />

      <Content>
        <Title>
          <h1>
            Here's your <span>financial wellness score:</span>
          </h1>
        </Title>

        <Card id="score-result-card">
          <CartHeader>
            <Logo src={"./src/assets/images/OriginIcon--circle.png"} />
            <ProgressBar
              bgColor={scoreValues.bgcolor}
              showPercentage={false}
              completed={scoreValues.progress}
            />
            <TitleWrapper>
              <CardTitle>{scoreValues.cardTitle}</CardTitle>
              <CardSubtitle>{scoreValues.cardSubtitle}</CardSubtitle>
            </TitleWrapper>
          </CartHeader>

          <ButtonContainer>
            <Button onClick={handleReturn}>Return</Button>
          </ButtonContainer>
        </Card>
      </Content>

      <PageFooter />
    </>
  );
}

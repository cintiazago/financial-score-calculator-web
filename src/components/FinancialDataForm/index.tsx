import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
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

type FormValues = {
  annualIncome: number;
  monthlyCosts: number;
};

export const FinancialDataForm = () => {
  const navigate = useNavigate();

  const getScoreHealthness = (annualIncome: number, monthlyCosts: number) => {
    const annualIncomeNet =
      annualIncome - annualIncome * (YEARLY_TAXES_PERCENTAGE / 100);

    const annualCosts = monthlyCosts * MONTHS;

    const annualCostsPercentageOverIncome =
      (annualCosts / annualIncomeNet) * 100;

    if (annualCostsPercentageOverIncome <= HEALTHY_LIMIT_PERCENTAGE) {
      return ScoreStatuses.HEALTHY;
    } else if (
      annualCostsPercentageOverIncome > HEALTHY_LIMIT_PERCENTAGE &&
      annualCostsPercentageOverIncome <= MEDIUM_LIMIT_PERCENTEGE
    ) {
      return ScoreStatuses.MEDIUM;
    } else if (annualCostsPercentageOverIncome > MEDIUM_LIMIT_PERCENTEGE) {
      return ScoreStatuses.LOW;
    } else {
      return ScoreStatuses.UNKNOWN;
    }
  };

  const validationSchema = Yup.object({
    annualIncome: Yup.number().positive().integer().required(),
    monthlyCosts: Yup.number().positive().integer().required(),
  });

  const initialValues = {
    annualIncome: 0,
    monthlyCosts: 0,
  };

  const handleSubmit = (values: FormValues) => {
    const score = getScoreHealthness(values.annualIncome, values.monthlyCosts);
    navigate("/result", { state: { score: score } });
  };

  return (
    <Container data-testid="financial-data-form">
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

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            await handleSubmit(values);
            resetForm();
          }}
        >
          <Content>
            <Form>
              <Input>
                <label htmlFor="annualIncome">Annual Income</label>
                <Field name="annualIncome" id="annualIncome" type="number" />
                <ErrorMessage
                  data-testid="annualIncomeError"
                  name="annualIncome"
                  component="p"
                />
              </Input>

              <Input>
                <label htmlFor="monthlyCosts">Monthly Costs</label>
                <Field name="monthlyCosts" id="monthlyCosts" type="number" />
                <ErrorMessage
                  data-testid="monthlyCostsError"
                  name="monthlyCosts"
                  component="p"
                />
              </Input>

              <ButtonContainer>
                <Button type="submit">Continue</Button>
              </ButtonContainer>
            </Form>
          </Content>
        </Formik>
      </Card>
    </Container>
  );
};

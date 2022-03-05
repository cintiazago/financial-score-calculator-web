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

  const onSubmit = (values: any) => {
    const score = getScoreHealthness(values.annualIncome, values.monthlyCosts);
    navigate("/result", { state: { score: score } });
  };

  const renderError = (message: string) => <p>{message}</p>;

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

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            await onSubmit(values);
            resetForm();
          }}
        >
          <Form>
            <Content>
              <Input>
                <label htmlFor="annualIncome">Annual Income</label>
                <Field name="annualIncome" type="number" />
                <ErrorMessage name="annualIncome" render={renderError} />
              </Input>

              <Input>
                <label htmlFor="monthlyCosts">Monthly Costs</label>
                <Field name="monthlyCosts" type="number" />
                <ErrorMessage name="monthlyCosts" render={renderError} />
              </Input>
            </Content>

            <ButtonContainer>
              <Button type="submit">Continue</Button>
            </ButtonContainer>
          </Form>
        </Formik>
      </Card>
    </Container>
  );
};

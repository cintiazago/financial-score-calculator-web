import { render, fireEvent, waitFor } from "@testing-library/react";
import { FinancialDataForm } from "./";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("FinancialDataForm Component", () => {
  test("should validate values when not a positive number", async () => {
    const { getByLabelText, getByTestId } = render(<FinancialDataForm />);

    const inputAnnualIncome = getByLabelText("Annual Income");
    const inputMonthlyCosts = getByLabelText("Monthly Costs");
    fireEvent.blur(inputAnnualIncome);
    fireEvent.blur(inputMonthlyCosts);

    await waitFor(() => {
      expect(getByTestId("annualIncomeError")).not.toBe(null);
      expect(getByTestId("annualIncomeError")).toHaveTextContent(
        "annualIncome must be a positive number"
      );

      expect(getByTestId("monthlyCostsError")).not.toBe(null);
      expect(getByTestId("monthlyCostsError")).toHaveTextContent(
        "monthlyCosts must be a positive number"
      );
    });
  });
});

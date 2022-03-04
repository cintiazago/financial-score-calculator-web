import { PageFooter } from "../../components/PageFooter";
import { PageHeader } from "../../components/PageHeader";
import { FinancialDataForm } from "../../components/FinancialDataForm";

export function Home() {
  return (
    <>
      <PageHeader />
      <FinancialDataForm />
      <PageFooter />
    </>
  );
}

import { render } from "@testing-library/react";
import { PageHeader } from "./";

describe("PageHeader Component", () => {
  test("should be able to render its container", () => {
    const { getByTestId } = render(<PageHeader />);

    expect(getByTestId("page-header-container")).toBeTruthy();
  });
});

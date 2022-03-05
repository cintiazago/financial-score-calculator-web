import { render } from "@testing-library/react";
import { PageFooter } from "./";

describe("PageFooter Component", () => {
  test("should be able to render its container", () => {
    const { getByTestId } = render(<PageFooter />);

    expect(getByTestId("page-footer-container")).toBeTruthy();
  });
});

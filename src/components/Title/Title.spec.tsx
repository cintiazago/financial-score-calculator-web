import { render } from "@testing-library/react";
import Title from "./";

describe("Title Component", () => {
  test("should be able to render its container", () => {
    const { getByTestId } = render(<Title />);

    expect(getByTestId("title-container-id")).toBeTruthy();
  });
});

import { render } from "@testing-library/react";
import Card from "./";

describe("Card Component", () => {
  test("should be able to render its container", () => {
    const containerId = "container-id";
    const { getByTestId } = render(<Card id={containerId} />);

    expect(getByTestId(containerId)).toBeTruthy();
  });
});

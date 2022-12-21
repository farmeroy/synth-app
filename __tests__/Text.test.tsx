import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Text from "../src/components/Text";

describe("Text", () => {
  it("displays 'content' props", () => {
    render(<Text>testing text</Text>);

    const text = screen.getByText("testing text");
    expect(text).toBeInTheDocument();
  });
});

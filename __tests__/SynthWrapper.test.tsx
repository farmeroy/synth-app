import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SynthWrapper from "../src/components/SynthWrapper";

describe("SynthWrapper", () => {
  it("renders a heading", () => {
    render(<SynthWrapper />);

    const heading = screen.getByRole("heading", {
      name: /synth/i,
    });
    expect(heading).toBeInTheDocument();
  });
});

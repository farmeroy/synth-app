import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SynthWrapper from "../src/components/synth/SynthWrapper";
import { RecoilRoot } from "recoil";

describe("SynthWrapper", () => {
  it("renders a heading", () => {
    render(
      <RecoilRoot>
        <SynthWrapper />
      </RecoilRoot>
    );

    const heading = screen.getByRole("heading", {
      name: /controls/i,
    });
    expect(heading).toBeInTheDocument();
  });
});

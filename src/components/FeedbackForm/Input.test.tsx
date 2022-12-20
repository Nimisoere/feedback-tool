import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./Input";
import { InputVariants } from "./RenderInput";

describe("Input control", () => {
  it("should match snapshot - Input", async () => {
    const { getByText, container } = render(
      <Input id="test" inputType={"email"} variant={InputVariants.INPUT} />
    );
    expect(container).toMatchSnapshot();
  });
  it("should match snapshot - Rating", async () => {
    const { getByText, container } = render(
      <Input id="test"rangeInputProps={{ min: 1, max: 5, step: 1}} variant={InputVariants.STAR_RATING} />
    );
    expect(container).toMatchSnapshot();
  });
  it("should match snapshot - Text Area", async () => {
    const { getByText, container } = render(
      <Input id="test" textareaProps={{ rows: 10 }} variant={InputVariants.TEXT_AREA} />
    );
    expect(container).toMatchSnapshot();
  });
});

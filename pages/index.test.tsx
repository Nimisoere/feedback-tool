import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Index from "./index";

describe("Feedback form page", () => {
  it("should match snapshot", async () => {
    const { getByText, container } = render(
      <Index />
    );
    expect(container).toMatchSnapshot();
  });
});


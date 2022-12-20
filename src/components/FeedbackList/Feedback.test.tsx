import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Feedback from "./Feedback";
import { mockfeedback } from "../../utils/test/mocks";

describe("Feedback Graph", () => {
  it("should match snapshot", async () => {
    const { getByText, container } = render(
      <Feedback feedback={mockfeedback[0]} />
    );
    expect(container).toMatchSnapshot();
  });
});

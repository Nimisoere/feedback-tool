import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackGraph from "./FeedbackGraph";

describe("Feedback Graph", () => {
  it("should match snapshot", async () => {
    const { getByText, container } = render(
      <FeedbackGraph />
    );
    expect(container).toMatchSnapshot();
  });
});

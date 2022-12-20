import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackForm from "./FeedbackForm";

describe("Feedback form", () => {
  it("should match snapshot", async () => {
    const { getByText, container } = render(
      <FeedbackForm />
    );
    expect(container).toMatchSnapshot();
  });
});

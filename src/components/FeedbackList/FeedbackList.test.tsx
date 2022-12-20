import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackList from "./FeedbackList";

describe("Feedback Graph", () => {
  it("should match snapshot", async () => {
    const { getByText, container } = render(
      <FeedbackList />
    );
    expect(container).toMatchSnapshot();
  });
});

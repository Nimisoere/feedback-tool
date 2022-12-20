import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ViewFeedback from "./view-feedback";

describe("View Feedback page", () => {
  it("should match snapshot", async () => {
    const { getByText, container } = render(
      <ViewFeedback />
    );
    expect(container).toMatchSnapshot();
  });
});


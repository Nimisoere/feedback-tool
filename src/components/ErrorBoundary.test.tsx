import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

const Child = () => {
  throw new Error("Test")
}

describe("Feedback Graph", () => {
  it("should match snapshot", async () => {
    const { getByText, container } = render(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    );
    expect(screen.getByTestId('server-error')).toBeVisible();
  });
});

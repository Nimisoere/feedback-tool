import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Seo from "./Seo";

describe("Feedback Graph", () => {
  it("should match snapshot", async () => {
    const { getByText, container } = render(
      <Seo title="Test" description="test" keywords={["test-1", "test-2"]} noFollow noIndex />
    );
    expect(container).toMatchSnapshot();
  });
});

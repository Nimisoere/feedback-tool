import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Feedback Graph", () => {
  it("should match snapshot", async () => {
    const { getByText, container } = render(
      <Header />
    );
    expect(container).toMatchSnapshot();
  });
});

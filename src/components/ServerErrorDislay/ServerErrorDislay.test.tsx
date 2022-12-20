import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ServerErrorDislay from "./ServerErrorDislay";

describe("Feedback Graph", () => {
  it("should match snapshot", async () => {
    const { getByText, container } = render(
      <ServerErrorDislay />
    );
    expect(container).toMatchSnapshot();
  });
});

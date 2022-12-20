import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Skeleton from "./Skeleton";

describe("Skeleton", () => {
  it("should match snapshot", async () => {
    const { getByText, container } = render(
      <Skeleton />
    );
    expect(container).toMatchSnapshot();
  });
});

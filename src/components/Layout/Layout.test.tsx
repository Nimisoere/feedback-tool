import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Feedback Graph", () => {
  it("should match snapshot", async () => {
    const { getByText, container } = render(
      <Layout>
        <span id="test">Hello world</span>
      </Layout>
    );
    expect(container).toMatchSnapshot();
  });
});

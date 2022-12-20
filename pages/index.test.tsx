import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import mockRouter from 'next-router-mock';
import Index from "./index";

jest.mock('next/router', () => require('next-router-mock'));

describe("Feedback form page", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });

  it("should match snapshot", async () => {
    const { getByText, container } = render(
      <Index />
    );
    expect(container).toMatchSnapshot();
  });
});


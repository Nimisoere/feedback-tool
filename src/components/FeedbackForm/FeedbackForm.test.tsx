import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import mockRouter from 'next-router-mock';
import FeedbackForm from "./FeedbackForm";

jest.mock('next/router', () => require('next-router-mock'));

describe("Feedback form", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });
  it("should match snapshot", async () => {
    const { getByText, container } = render(
      <FeedbackForm />
    );
    expect(container).toMatchSnapshot();
  });
});

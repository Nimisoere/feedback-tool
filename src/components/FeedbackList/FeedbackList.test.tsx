import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackList from "./FeedbackList";
import { useGetFeedBack } from "../../hooks/api/useGetFeedBack";
import { mockfeedback } from "../../utils/test/mocks";

const useGetFeedBackModule = { useGetFeedBack };

const spy = jest.spyOn(useGetFeedBackModule, "useGetFeedBack");
const myMockFn = jest.fn();

describe("Feedback List - Fetched Results", () => {
  beforeEach(() => {
    spy.mockReturnValue({
      error: null,
      isLoading: false,
      feedbacks: mockfeedback,
      getFeedback: myMockFn
    });
  });
  it("should match snapshot", async () => {
    const { getByText, container } = render(
      <FeedbackList />
    );
    expect(container).toMatchSnapshot();
  });
});


describe("Feedback List - Loading", () => {
  beforeEach(() => {
    spy.mockReturnValue({
      error: null,
      isLoading: true,
      feedbacks: [],
      getFeedback: myMockFn
    });
  });
  it("should match snapshot", async () => {
    const { getByText, container } = render(
      <FeedbackList />
    );
    expect(container).toMatchSnapshot();
  });
});

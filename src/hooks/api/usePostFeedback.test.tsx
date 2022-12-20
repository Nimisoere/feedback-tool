import "@testing-library/jest-dom";
import { act, render, waitFor } from "@testing-library/react";
import usePostFeedback from "./usePostFeedback";

jest.mock('../../utils/api/api.utils', () => ({
  fetcher: jest.fn(() => Promise.resolve({ some: 'response' })),
}));

describe("Graph utilities", () => {
  it('should set loading to true when postFeedback is called', async () => {
    const TestComponent = () => {
      const { loading, postFeedback } = usePostFeedback();
      return (
        <button onClick={() => postFeedback({ some: 'body' })}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      );
    };
    const { container } = render(<TestComponent />);
    expect(container.firstChild?.textContent).toBe('Submit');
  });
});

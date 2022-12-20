import "@testing-library/jest-dom";
import { act, renderHook, waitFor } from "@testing-library/react";

import { mockfeedback } from "../../utils/test/mocks";
import useGetFeedBack from "./useGetFeedBack";

describe("Graph utilities", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })
  
  afterEach(() => {
    act(() => {
      jest.runAllTimers()
    })
  })
  it("should return loading", async () => {
    const { result } = renderHook(() => useGetFeedBack())
    expect(result.current.error).toBeUndefined()
    expect(result.current.isLoading).toBe(true)
  });
  it("should return result", async () => {
    (fetch as any).mockOnce(JSON.stringify(mockfeedback))
    const { result } = renderHook(() => useGetFeedBack())
    console.log(result)
    expect(result.current.isLoading).toBe(true)
    await waitFor(() => expect(result.current?.feedbacks?.length)?.toBe(6))
    expect(result.current.isLoading).toBe(false)  });
});

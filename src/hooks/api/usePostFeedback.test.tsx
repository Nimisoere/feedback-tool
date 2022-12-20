import "@testing-library/jest-dom";
import usePostFeedback from "./usePostFeedback";

describe("Graph utilities", () => {
  it("should generate graph data", async () => {
    const graphData = (usePostFeedback())
    expect(graphData).toBe(3);
  });
});

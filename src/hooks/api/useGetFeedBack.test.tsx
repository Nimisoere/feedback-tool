import "@testing-library/jest-dom";
import useGetFeedBack from "./useGetFeedBack";

describe("Graph utilities", () => {
  it("should generate graph data", async () => {
    const graphData = (useGetFeedBack())
    expect(graphData).toBe(3);
  });
});

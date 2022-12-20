import "@testing-library/jest-dom";
import { groupBy, range } from "./common";
import { mockfeedback } from "./test/mocks";

describe("Graph utilities", () => {
  it("should group graph data", async () => {
    const groupedData = (groupBy(mockfeedback, "rating"))
    expect(Object.keys(groupedData)?.length).toBe(3);
    expect(groupedData["1"]?.length).toBe(1);
    expect(groupedData["2"]?.length).toBe(3);
    expect(groupedData["3"]?.length).toBe(2);
  });
  it("should return a range", async () => {
    const graphData = (range(1, 5, 1))
    expect(graphData?.length).toBe(5);
    expect(graphData).toContain(3);
  });
});

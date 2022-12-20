import "@testing-library/jest-dom";
import { mockfeedback } from "../../utils/test/mocks";
import { generateChartObject } from "./graph.utils";

describe("Graph utilities", () => {
  it("should generate graph data", async () => {
    const graphData = (generateChartObject(mockfeedback))
    expect(graphData?.length).toBe(3);
  });
});

import "@testing-library/jest-dom";
import { fetcher } from "./api.utils";
import { API_URLS } from "./endpoints";

describe("API utilities", () => {
  it("should return a promise", async () => {
    const fetchData = (fetcher(API_URLS.GET_FEEDBACK, {}))
    expect(fetchData).toReturn();
  });
});

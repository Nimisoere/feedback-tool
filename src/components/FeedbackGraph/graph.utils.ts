import { FeedbackResponse } from "../../hooks/api/useGetFeedBack";
import { groupBy } from "../../utils/common";

type FeedbackChartData = {
  rating: string;
  count: number;
}

export const generateChartObject = (data: FeedbackResponse[]):FeedbackChartData[] => {
  const groupedFeedbackByRatings = groupBy(data, "rating");
  return Object.keys(groupedFeedbackByRatings)?.map((rating) => ({
    count: groupedFeedbackByRatings[rating]?.length,
    rating: `${rating} Star(s)`
  }))
}
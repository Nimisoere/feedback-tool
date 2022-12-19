import useSWR from 'swr'
import { fetcher } from '../../utils/api/api.utils'
import { API_URLS } from '../../utils/api/endpoints'

export type FeedbackResponse = {
  comment: string;
  createdAt: Date
  email: string
  id: string;
  location: string;
  name: string
  rating: string
}

const useGetFeedBack = () => {
  const { data, error, isLoading, mutate } = useSWR<FeedbackResponse[]>(API_URLS.GET_FEEDBACK, fetcher)
  return {
    feedbacks: data,
    isLoading,
    error,
    getFeedback: mutate
  }
}

export default useGetFeedBack;
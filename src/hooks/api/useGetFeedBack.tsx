import useSWR from 'swr'
import { fetcher } from '../../utils/api/api.utils'
import { API_URLS } from '../../utils/api/endpoints'

export type FeedbackResponse = {
  comment: string;
  createdAt: Date
  email: string
  id: string;
  name: string
  rating: number
}

export const useGetFeedBack = () => {
  const { data, error, isLoading, mutate } = useSWR<FeedbackResponse[]>(`${API_URLS.GET_FEEDBACK}?_sort=createdAt&_order=desc`, fetcher)
  return {
    feedbacks: data,
    isLoading,
    error,
    getFeedback: mutate
  }
}

export default useGetFeedBack;
import * as React from "react";

import useSWR from 'swr'
import { fetcher } from '../../utils/api/api.utils'
import { API_URLS } from '../../utils/api/endpoints'

const usePostFeedback = <SubmitResponse,>() => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<any>(null);
  const [response, setResponse] = React.useState<SubmitResponse | null | undefined>(null);


  React.useEffect(() => {
    return () => {
      setLoading(false);
      setError(null);
      setResponse(null)
    }
  }, [])

  const postFeedback = async <RequestBody,>(body: RequestBody, callback?: (response: SubmitResponse) => void) => {
    try {
      setLoading(true)
      const response = await fetcher(`${API_URLS.GET_FEEDBACK}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json"
        }
      })
      setLoading(false)
      setResponse(response)
      if (callback) {
        console.log("Here")
        callback(response)
      }
    } catch (e) {
      setError(e)
    }
  }

  return {
    loading,
    error,
    response,
    postFeedback
  }
}

export default usePostFeedback;
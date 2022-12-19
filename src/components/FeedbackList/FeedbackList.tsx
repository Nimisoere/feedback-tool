import Link from 'next/link';
import React from 'react'
import { KeyedMutator } from 'swr';
import useGetFeedBack, { FeedbackResponse } from '../../hooks/api/useGetFeedBack'
import Feedback from './Feedback';

type RenderResultProps = {
  feedbacks: FeedbackResponse[] | undefined;
  isLoading: boolean;
  error: any;
  getFeedback: KeyedMutator<FeedbackResponse[]>
}

const RenderResult: React.FC<RenderResultProps> = ({ isLoading, error, feedbacks, getFeedback }) => {
  if (isLoading) {
    return (
      <div role="status" className="animate-pulse">
        <div className="h-2.5 bg-gray-200 rounded-full max-w-[250px] mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
  if (error) {
    return (
      <div role="status" className="w-full">
        <div className='bg-red-100 border-2 border-red-200 items-center rounded-lg w-full flex justify-between p-4'>
          <span className='font-medium'>{error?.message || "Could not fetch feedback list at this time"}</span>
          <button onClick={() => getFeedback()} className='bg-red-400 active:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 hover:bg-red-500 py-2 px-8 rounded-lg font-semibold'>
            Try again
          </button>
        </div>
      </div>
    )
  }
  if (feedbacks) {
    if (!feedbacks.length) {
      return (
        <div role="status" className="w-full">
          <div className='bg-yellow-100 border-2 border-yellow-200 items-center rounded-lg w-full flex justify-between p-4'>
            <span className='font-medium'>No feedback posted yet</span>
            <Link href={"/"} className='bg-yellow-400 active:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300 hover:bg-yellow-500 py-2 px-8 rounded-lg font-semibold'>
              Submit a feedback
            </Link>
          </div>
        </div>
      )
    }
    return (
      <div>
        {
          feedbacks?.map((feedback) => (
            <Feedback key={feedback.id} feedback={feedback} />
          ))
        }
      </div>
    )
  }
  return null;
}

const FeedbackList = () => {
  const { feedbacks, error, isLoading, getFeedback } = useGetFeedBack();

  return (
    <div className='flex flex-col'>
      <div>
        <div className='mb-8'>
          <h2 className='font-medium text-2xl'>Latest Comments</h2>
        </div>
        <RenderResult getFeedback={getFeedback} error={error} isLoading={isLoading} feedbacks={feedbacks} />
      </div>
    </div>
  )
}

export default FeedbackList
import Link from 'next/link';
import React from 'react'
import { KeyedMutator } from 'swr';
import useGetFeedBack, { FeedbackResponse } from '../../hooks/api/useGetFeedBack'
import Skeleton from '../common/Skeleton';
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
      <Skeleton />
    )
  }
  if (error) {
    return (
      <div role="status" className="w-full">
        <div className='alert-danger'>
          <span className='font-medium'>{error?.message || "Could not fetch feedback list at this time"}</span>
          <button type='button' onClick={() => getFeedback()} className='btn-danger'>
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
          <div className='alert-warning'>
            <span className='font-medium'>No feedback posted yet</span>
            <Link href={"/"} className='btn-warning'>
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
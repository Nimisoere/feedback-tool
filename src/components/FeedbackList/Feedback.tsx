import React from 'react'
import { FeedbackResponse } from '../../hooks/api/useGetFeedBack'
import { range } from '../../utils/common'

type Props = {
  feedback: FeedbackResponse
}

const Feedback = React.memo(function Feedback({ feedback }: Props) {
  const datestring = new Date(feedback.createdAt)?.toLocaleString()
  return (
    <article key={feedback.id} className='flex flex-col mb-4'>
      <div className="font-medium text-lg mb-2 text-black">
        <p>{feedback.name} <span className='text-slate-600 text-sm'>({feedback.email})</span></p>
      </div>
      <div className="flex items-center mb-2">
        {range(1, 5, 1).map((star) => <span className={`text-2xl ${star <= feedback.rating ? "text-yellow-400" : "text-slate-400"}`} key={star}>&#11089;</span>)}
        <p className="ml-2 text-sm font-medium text-gray-900">{feedback.rating} out of 5</p>
      </div>
      <footer className="mb-2 text-sm text-gray-500"><p>Reviewed on <time dateTime={datestring}>{datestring}</time></p></footer>
      <div className="mb-2 font-light text-gray-500">{feedback.comment}</div>
    </article>
  )
})

export default Feedback
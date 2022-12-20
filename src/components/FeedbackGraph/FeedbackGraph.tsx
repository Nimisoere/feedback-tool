import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import useGetFeedBack from '../../hooks/api/useGetFeedBack';
import { generateChartObject } from './graph.utils';
import Skeleton from '../common/Skeleton';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Feedback Distribution',
    },
  },
};

type Props = {}

const FeedbackGraph = (props: Props) => {
  const { feedbacks, error, isLoading, getFeedback } = useGetFeedBack();
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

  if (isLoading) {
    return <Skeleton />
  }

  const data = generateChartObject(feedbacks || [])

  const chartData = {
    labels: data.map(row => row.rating),
    datasets: [
      {
        data: data.map(row => row.count),
      }
    ]
  }

  return (
    <Bar options={options} data={chartData} />
  )
}

export default FeedbackGraph
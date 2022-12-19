import Link from 'next/link'
import React from 'react'
import FeedbackGraph from '../src/components/FeedbackGraph/FeedbackGraph'
import FeedbackList from '../src/components/FeedbackList/FeedbackList'
import Layout from '../src/components/Layout/Layout'

type Props = {}

const index = (props: Props) => {
  return (
    <Layout>
      <div className='py-10'>
        <div className='container max-w-3xl mx-auto'>
          <div className='mb-8 flex justify-between'>
            <h1 className='font-medium text-2xl'>Feedback Results</h1>
            <Link href={"/"} className='bg-cyan-400 active:bg-cyan-600 focus:outline-none focus:ring focus:ring-cyan-300 hover:bg-cyan-500 py-2 px-8 rounded-lg font-semibold' type='button'>
              <span>&#8592;</span> Back for feedback form 
            </Link>
          </div>
          <div className='flex flex-col'>
            <div className='mb-12'>
              <FeedbackGraph />
            </div>
            <div className='mb-12'>
              <FeedbackList />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default index
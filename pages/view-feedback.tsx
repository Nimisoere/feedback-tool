import Link from 'next/link'
import React from 'react'
import FeedbackGraph from '../src/components/FeedbackGraph/FeedbackGraph'
import FeedbackList from '../src/components/FeedbackList/FeedbackList'
import Layout from '../src/components/Layout/Layout'
import Seo from '../src/components/Seo'

type Props = {}

const index = (props: Props) => {
  return (
    <Layout>
      <Seo title='View Feedback' />
      <div className='py-10'>
        <div className='container max-w-3xl mx-auto'>
          <div className='mb-8 flex flex-wrap justify-between'>
            <h1 className='font-medium text-2xl mb-4 sm:mb-0'>Feedback Results</h1>
            <Link href={"/"} className='btn-primary'>
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
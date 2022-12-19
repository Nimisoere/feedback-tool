import React from 'react'
import FeedbackForm from '../src/components/FeedbackForm/FeedbackForm'
import Layout from '../src/components/Layout/Layout'

type Props = {}

const index = (props: Props) => {
  return (
    <Layout>
      <div className='py-10'>
        <div className='container max-w-3xl mx-auto'>
          <div className='mb-8'>
            <h1 className='font-medium text-2xl'>Feedback Form</h1>
          </div>
          <div>
            <FeedbackForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default index
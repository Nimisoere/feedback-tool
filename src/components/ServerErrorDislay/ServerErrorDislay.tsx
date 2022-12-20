import Link from 'next/link'
import React from 'react'
import Layout from '../Layout/Layout'

type Props = {}

const ServerErrorDislay = (props: Props) => {
  return (
    <Layout>
      <div data-testid='server-error' className="flex flex-col items-center text-center container mx-auto py-24">
        <h1 className="font-semibold font-serif text-4xl text-neutral-400 mb-8">
          500 | Oops!
        </h1>
        <p>
          Sorry 😔, It&apos;s not you, it&apos;s us. Something&apos;s gone wrong on our end.
          <br />
          <Link className="underline decoration-amber-800" href="/">
            We should be back shortly
          </Link>
        </p>
      </div>
    </Layout>
  )
}

export default ServerErrorDislay
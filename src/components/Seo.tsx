import Head from 'next/head'
import React from 'react'

type Props = {
  title: string;
  description?: string;
  keywords?: string[];
  noIndex?: boolean;
  noFollow?: boolean;
}

const Seo = ({ title, noFollow, noIndex, description,keywords }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {noIndex && <meta name="robots" content="noIndex" />}
      {noFollow && <meta name="robots" content="noFollow" />}
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      {description && <meta name="description" content={description} />}
      {description && (
        <meta property="og:description" content={description} />
      )}
      {description && (
        <meta name="twitter:description" content={description} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      {keywords?.length && <meta name="keywords" content={keywords?.join(",")} />}
    </Head>
  )
}

export default Seo
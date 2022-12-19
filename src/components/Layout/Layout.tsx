import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='min-h-screen text-neutral-800 flex flex-col items-stretch'>
      {children}
    </div>
  )
}

export default Layout
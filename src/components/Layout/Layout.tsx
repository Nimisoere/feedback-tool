import React from 'react'
import Header from './Header'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col items-stretch'>
      <Header />
      <main className='flex-grow'>
        {children}
      </main>
    </div>
  )
}

export default Layout
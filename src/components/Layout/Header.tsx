import React from 'react'
import Link from 'next/link'

import { HEADER_NAV_ITEMS } from './layout-data/header-data';

const Header: React.FC = () => {
  return (
    <header
      className={
        `w-full sticky top-0 z-10 shadow bg-white sm:h-20 py-4 sm:py-0 h-auto flex items-center transition-all duration-500`
      }
    >
      <div className='container mx-auto flex flex-wrap justify-between'>
        <div>
          <Link href="/" className='font-bold text-2xl'>FEEDr.</Link>
        </div>
        <nav className='gap-4 sm:w-auto w-full flex justify-between'>
          {
            HEADER_NAV_ITEMS.map((nav) => (
              <Link className='btn-plain' key={nav.id} href={nav.url}>{nav.title}</Link>
            ))
          }
        </nav>
      </div>
    </header>
  )
}

export default Header
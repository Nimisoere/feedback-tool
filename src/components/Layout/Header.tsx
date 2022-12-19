import React from 'react'
import Link from 'next/link'

import useScrollDirection from '../../hooks/useScrollDirection';
import { HEADER_NAV_ITEMS } from './layout-data/header-data';

const Header: React.FC = () => {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={
        `w-full sticky 
        ${scrollDirection === "down" ? "-top-20" : "top-0"} 
        z-10 shadow bg-white sm:h-20 h-auto flex items-center transition-all duration-500`
      }
    >
      <div className='container mx-auto flex justify-between'>
        <div>
          <Link href="/" className='font-bold text-2xl'>FEEDr.</Link>
        </div>
        <nav className='gap-4 flex'>
          {
            HEADER_NAV_ITEMS.map((nav) => (
              <Link className='hover:bg-cyan-400 rounded-lg py-2 px-4 font-medium' key={nav.id} href={nav.url}>{nav.title}</Link>
            ))
          }
        </nav>
      </div>
    </header>
  )
}

export default Header
import React from 'react'
import { Spicy_Rice } from 'next/font/google'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='header'> 
        
        <div className='logo'>
          <Link href='/'>RECIPEDIA</Link>
        </div>
        <div className='links'>
          <Link href='/contribute'>CONTRIBUTE</Link>
          <Link href='/about'>ABOUT US</Link>
          
        </div>
    
    </header>
  )
}

export default Header
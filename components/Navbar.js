import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-16 bg-purple-500 flex justify-between items-center px-3 text-white'>
        <div className='logo font-bold text-2xl'>
            <Link href="/">Bitlinks</Link>
        </div>
        <div>
            <ul className='flex justify-center gap-4 items-center'>
                <Link href='/'><li>Home</li></Link>
                <Link href='/about'><li>About</li></Link>
                <Link href='/generate'><li>Shorten</li></Link>
                <Link href='/contact'><li>Contact</li></Link>
                <li className='flex gap-3'>
                    <Link href='/generate'><button className='bg-purple-400 rounded-lg shadow-lg font-bold px-3 py-1 cursor-pointer hover:bg-purple-300'>Try now</button></Link>
                    <Link href='/github'><button className='bg-purple-400 rounded-lg shadow-lg font-bold px-3 py-1 cursor-pointer hover:bg-purple-300'>Github</button></Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
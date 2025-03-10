import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
   <nav>
    <ul className="flex items-center justify-center bg-slate-800/45 text-gray-100 py-10 px-16 text-2x1 shadow-2x1 ">
    <li>
    <Link href={'/'}>Home</Link>
    </li>
    <li>
    <Link href={'/about'}>About</Link>
  
    </li>
    <li>
        <Link href={'/contact'}>Contact</Link>
        </li>

    </ul>
   </nav>
  )
}

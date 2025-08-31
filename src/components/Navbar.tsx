'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-gray-700 text-white w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-3">
     

        <ul className="hidden md:flex gap-6">
          <li className="hover:text-black"><Link href="/">Home</Link></li>
          <li className="hover:text-black"><Link href="/products">Products</Link></li>
          <li className="hover:text-black"><Link href="/Gallery">Gallery</Link></li>
          <li className="hover:text-black"><Link href="/Contact">Contacts</Link></li>
          <li className="hover:text-black"><Link href="/about">About</Link></li>
          
        </ul>

  
        <button 
          className="md:hidden focus:outline-none cursor-pointer" 
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <><ul className="flex flex-col gap-4 p-4 bg-gray-700 md:hidden">
          <li className="hover:text-black"><Link href="/">Home</Link></li>
          <li className="hover:text-black"><Link href="/products">Products</Link></li>
          <li className="hover:text-black"><Link href="/Gallery">Gallery</Link></li>
          <li className="hover:text-black"><Link href="/Contact">Contacts</Link></li>
          <li className="hover:text-black"><Link href="/about">About</Link></li>

        </ul></>
      )}
    </nav>
  )
}

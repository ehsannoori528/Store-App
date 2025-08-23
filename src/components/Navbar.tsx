import Link from 'next/link'
import React from 'react'

export default function navbar() {
  return (
    <div>
<ul className='flex justify-between bg-gray-700  pl-5 pt-1 pb-1 w-full'>
  <div className='flex gap-5'>
      <li className='hover:text-black text-white'><Link href="/">Home</Link></li>
      <li className='hover:text-black text-white'><Link href="/Services">Services</Link></li>
      <li className='hover:text-black text-white'><Link href="/products">Products</Link></li>
      <li className='hover:text-black text-white'><Link href="/Gallery">Gallery</Link></li>
      <li className='hover:text-black text-white'><Link href="/Contact">Contacts</Link></li>
      <li className='hover:text-black text-white'><Link href="/about">About</Link></li>

      </div>
      <li className='flex flex-col text-white items-end pr-3'>Shop Top Categories</li>

      </ul>

    </div>
  )
}

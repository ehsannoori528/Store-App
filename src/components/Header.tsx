"use client";
import React from 'react'
import { Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Link from 'next/link';




export default function Header() {
const router =  useRouter();

const handleClick = () => {
  router.push("/Authentication/Login");
};
  return (

    <div className='flex  bg-gray-800 relative'>
       <div className="flex items-center">
        <Image className='ml-5' src="/logo.png" alt="Logo" width={60} height={60} />
      </div>

      <div className='relative flex justify-center flex-1 mx-6 py-1 '>
        <span className='absolute left-1 top-3 text-white text-2xl font-bold'>ALMAS</span>
        <input className='relative bg-white border mt-2 w-[500px] h-8 pl-2 rounded-md flex ' type="text"  placeholder='Search...' />
        <Search className="absolute right-78  top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" />
        <Link href="/Authentication/Signup" className="text-blue-300 hover:underline text-sm absolute right-23 mt-3">Sign up</Link>
      <button onClick={handleClick} className='bg-green-600 cursor-pointer absolute mt-2 right-1 justify-center p-1 w-16 hover:opacity-75 text-white rounded-md'>Login</button>
        
      </div>
      
    </div>
  )
}

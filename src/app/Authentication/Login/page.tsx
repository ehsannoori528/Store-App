"use client";
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation';



export default function Login() {
const routers =  useRouter();

const handleClicks = () => {
  routers.push("../");
}


const handleClick = () => {
  routers.push("Signup");
}
  return (

<div className='flex min-h-screen justify-center items-center bg-gray-900'>

    <div className='flex flex-col'>

        <h1 className='text-white font-semibold text-2xl mb-8'>Sign in to Your Account</h1>

        <div className='flex flex-col'>
        <span className='text-white'>Email address</span>
        <input className='bg-white rounded-sm' type="text" width={400} height={80} />
       </div>
       
      <div className='flex justify-between mt-6'>
        <span className='text-white'>Password</span>
        <Link href="/forgot-password" className="text-blue-500 hover:underline text-sm">Forget password</Link>
        </div>
        <input className='bg-white rounded-sm' type="text" width={400} height={80} />

        <button onClick={handleClicks} className='bg-fuchsia-700 rounded-md text-white mt-3 cursor-pointer hover:opacity-85'>Sign in</button>
        <button onClick={handleClick} className='bg-green-700 rounded-md text-white mt-3 cursor-pointer hover:opacity-85'>Create Account</button>

    </div>



</div>


  )
}
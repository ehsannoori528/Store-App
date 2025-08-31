"use client";

import React from 'react'
import Image from 'next/image'

import { Facebook, Instagram, Mail, Phone, Twitter } from 'lucide-react';
import Link from 'next/link';


export default function ContactPage() {
  return (


<div className='flex min-h-screen bg-blue-100 gap-2'>
<Link className='text-blue-600 underline mt-6 ml-6' href="/">Go Home</Link>

    <div className='flex-1 p-8 mt-15  ml-10'>
    <h1 className='text-fuchsia-800 mb-4'>CONTACT US</h1>
    <h1 className='text-3xl w-60 font-bold mb-4'>Get in touch today</h1>
    <span>for more information please contact these below ways</span>


    
<div className='pl-6'>

  <div className='flex items-center gap-3'>

    <Mail className='text-blue-600'/>
    <div className='flex flex-col mt-15'>
      <span>Email</span>
      <span>ehsannoori528@gmail.com</span>
    </div>
    </div>


    <div className='flex flex-col mt-1'>

    <div className='flex items-center gap-3'>
    <Phone className='text-blue-600'/>
    <div className='flex flex-col mt-4'>
      <span>Phone</span>
      <span>(+93) 796-10-27-82</span>

    </div>
    </div>
    </div>


    <div className='flex flex-row mt-20 justify-center items-center gap-3 ml-10'>
        <Facebook />
        <Instagram />
        <Twitter />
    </div>
    </div>
 
    </div>
    <div className="flex-1 p-8 mt-15">

    <h2 className="text-2xl font-bold mb-4">Request Form</h2>

    <form className="flex flex-col gap-4 mr-30">
          <input type="text" placeholder="Name" className="p-2 border rounded" />
          <input type="email" placeholder="Email" className="p-2 border rounded" />
          <textarea placeholder="Message" className="p-2 border rounded"></textarea>
          <button className="bg-fuchsia-700 text-white p-2 rounded hover:opacity-80">Send</button>
    </form>
  </div>
    </div>
  )
}

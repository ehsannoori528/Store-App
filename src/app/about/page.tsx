"use client";
import React from 'react';
import Image from "next/image";
import Link from 'next/link';



export default function AboutPage() {
  return (

    
      <div className='flex flex-col w-full min-h-full justify-center'>
          <div className='flex relative w-full'>
            <Link className='absolute text-blue-600 underline mt-6 ml-6' href="/">Go Home</Link>
          <Image className='w-full h-70' src={'/about-us.png'} alt={'about'} width={1900} height={80} />
          <span className='absolute right-80 top-1/2 -translate-y-1/2 text-white text-6xl font-extrabold'>About us</span>
         
          </div>
  
            <div className='relative w-full'>
              <h1 className='text-2xl ml-40 mt-15 w-45 font-extrabold text-blue-400'>Behind the Success</h1>
              <p className='absolute w-140 mt-3 ml-39 text-blue-900'>I am Ehsan Noori, a passionate software engineer from Herat, Afghanistan. I specialize in frontend development and enjoy building modern, user-friendly web applications using technologies like React, Next.js, and Tailwind CSS. I am highly motivated, detail-oriented, and always eager to learn new skills. Outside of coding, I enjoy music, movies, and exploring innovative ideas that can make life easier and more enjoyable.</p>
              <span className='absolute right-52 text-red-800 top-14 font-bold text-2xl'>Ehsan Noori</span>
              <Image className='absolute w-40 rounded-full right-50 top-28 transition-transform duration-300
             hover:scale-125' width={300} height={300} src={'/ehsanimg.jpg'} alt={'ehsanimage'} />


          </div>
          <br /><br /><br />
      </div>
       
  );
}

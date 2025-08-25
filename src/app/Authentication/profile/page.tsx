"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";


export default function Profile(){

    
    
    const [user , setUser] =  useState<{name:string ; email: string} | null> (null);

    useEffect(() => {
        

      const storedUser  = localStorage.getItem("user")
      if (storedUser){

        setUser(JSON.parse(storedUser));

      }
    }, []);

   
    if(!user){
        <p>user Not found Please Sign up first</p>
    }
  

    return(


    

        <div className="flex flex-col relative pt-10 items-center w-full min-h-screen bg-cyan-200">
            <Link className="absolute left-5 text-blue-700" href="/">Go Home</Link>
            <h1 className="font-bold text-2xl underline">Your Profile</h1>
            <div className="flex flex-row gap-10 mt-6">
        <div className="w-30 border">
            <span className="font-bold">Name</span>
            <p>{user?.name}</p>
        </div>
        <div className="w-60 border">
            <span className="font-bold">Email</span>
            <p>{user?.email}</p>
            </div>
            </div>
        </div>

    );
}

"use client";
import { useRouter } from "next/navigation";
import React from "react";

const GetNowButton = () => {
   

  return (
    <button  className="bg-gray-300 hover:bg-white w-18 text-sm p-1 rounded-md shadow-md transition duration-300">
      Get NOW
    </button>
  );
};

export default GetNowButton;
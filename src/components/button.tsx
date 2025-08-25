"use client";
import { useRouter } from "next/navigation";
import React from "react";

type GetNowButtonProps = {
  productid: string | number;
};

const GetNowButton = ({productid}: GetNowButtonProps) => {
   const router = useRouter();

   const handleClick = () => {
    router.push(`../products/${productid}`);
   };


  return (
    <button onClick={handleClick}  className="bg-gray-300 hover:bg-white w-18 text-sm p-1 rounded-md shadow-md transition duration-300">
      Get NOW
    </button>
  );
};

export default GetNowButton;
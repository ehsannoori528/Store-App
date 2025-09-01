import React from 'react'
import Image from "next/image";


export default function GalleryPage() {
  return (
     <div className="flex flex-col items-center w-full mt-8">
       {/* متن‌ها */}
      
       <h1 className="text-white text-3xl mb-6">This is Our Gallery</h1>
 
       {/* ردیف عکس‌ها */}
       <div className="grid grid-cols-6 justify gap-4 m-15">
         <Image className="h-40 w-auto object-cover bg-white rounded-xl hover:h-41 hover:opacity-85 hover:scale-105 hover:transition-transform duration-300 " src="/img1.png" alt="product1" width={280} height={150} />
         <Image className="h-40 w-auto object-cover bg-white rounded-xl hover:h-41 hover:opacity-85 hover:scale-105 hover:transition-transform duration-300 " src="/img2.png" alt="product2" width={280} height={150} />
         <Image className="h-40 w-auto object-cover bg-white rounded-xl hover:h-41 hover:opacity-85 hover:scale-105 hover:transition-transform duration-300 " src="/img3.png" alt="product3" width={280} height={80} />
         <Image className="h-40 w-auto object-cover bg-white rounded-xl hover:h-41 hover:opacity-85 hover:scale-105 hover:transition-transform duration-300 " src="/img4.png" alt="product4" width={280} height={80} />
        <Image className="h-40 w-auto object-cover bg-white rounded-xl hover:h-41 hover:opacity-85  hover:scale-105 hover:transition-transform duration-300" src="/img9.png" alt="product5" width={280} height={80} />
         <Image className="h-40 w-auto object-cover bg-white rounded-xl hover:h-41 hover:opacity-85 hover:scale-105 hover:transition-transform duration-300 " src="/img10.png" alt="product4" width={280} height={80} />

       </div>
       <div className="grid grid-cols-6 justify mt-5 gap-4 m-15">
         <Image className="h-40 w-auto object-cover rounded-xl bg-white  hover:h-41 hover:opacity-85 hover:scale-105 hover:transition-transform duration-300 " src="/img5.png" alt="product1" width={280} height={150} />
         <Image className="h-40 w-auto object-cover rounded-xl bg-white  hover:h-41 hover:opacity-85 hover:scale-105 hover:transition-transform duration-300 " src="/img6.png" alt="product2" width={280} height={150} />
         <Image className="h-40 w-auto object-cover rounded-xl bg-white  hover:h-41 hover:opacity-85 hover:scale-105 hover:transition-transform duration-300 " src="/img7.png" alt="product3" width={280} height={80} />
         <Image className="h-40 w-auto object-cover rounded-xl bg-white  hover:h-41 hover:opacity-85 hover:scale-105 hover:transition-transform duration-300 " src="/img8.png" alt="product4" width={280} height={80} />
        <Image className="h-40 w-auto object-cover rounded-xl bg-white  hover:h-41 hover:opacity-85  hover:scale-105 hover:transition-transform duration-300" src="/img11.png" alt="product3" width={280} height={80} />
         <Image className="h-40 w-auto object-cover rounded-xl  bg-white hover:h-41 hover:opacity-85 hover:scale-105 hover:transition-transform duration-300 " src="/img12.png" alt="product4" width={280} height={80} />
       </div>
     </div>
  )
}

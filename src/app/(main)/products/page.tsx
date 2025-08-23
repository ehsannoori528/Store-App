import React from 'react'
import Image from "next/image";


export default function Products() {
  return (
       <div className="flex flex-col items-center w-full mt-8">
          {/* متن‌ها */}
         
          <h1 className="text-white text-3xl mb-6">This is Our Products</h1>
    
          {/* ردیف عکس‌ها */}
          <div className="flex flex-wrap justify gap-4">
            <Image className="h-40 w-auto object-cover rounded-xl hover:h-41 hover:opacity-85 " src="/product1.jpg" alt="product1" width={280} height={150} />
            <Image className="h-40 w-auto object-cover rounded-xl hover:h-41 hover:opacity-85 " src="/product2.png" alt="product2" width={280} height={150} />
            <Image className="h-40 w-auto object-cover rounded-xl hover:h-41 hover:opacity-85 " src="/product3.png" alt="product3" width={280} height={80} />
            <Image className="h-40 w-auto object-cover rounded-xl hover:h-41 hover:opacity-85 " src="/product4.png" alt="product4" width={280} height={80} />
            
          </div>
          <div className="flex flex-wrap justify mt-5 gap-4">
            <Image className="h-40 w-auto object-cover rounded-xl hover:h-41 hover:opacity-85 " src="/product5.png" alt="product1" width={280} height={150} />
            <Image className="h-40 w-auto object-cover rounded-xl hover:h-41 hover:opacity-85 " src="/product6.png" alt="product2" width={280} height={150} />
            <Image className="h-40 w-auto object-cover rounded-xl hover:h-41 hover:opacity-85 " src="/product7.png" alt="product3" width={280} height={80} />
            <Image className="h-40 w-auto object-cover rounded-xl hover:h-41 hover:opacity-85 " src="/product8.png" alt="product4" width={280} height={80} />
            
          </div>
        </div>
  )
}

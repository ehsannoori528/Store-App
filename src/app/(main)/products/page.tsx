

import Image from "next/image";
import GetNowButton from '@/components/button';
import { Search } from "lucide-react";


export default function Products() {


  return (
       <div className="flex flex-col items-center w-full mt-8">
         
      <h1 className="text-white text-3xl mb-6">Populer Gift Collections</h1> 

      <div className="flex flex-wrap justify gap-6">
          <div className="bg-blue-100 pb-13 rounded-xl inline-block">
            <Image className="h-40 w-auto object-cover rounded-xl transition-transform duration-300
             hover:scale-108 hover:opacity-85" src="/image1.jpg" alt="product1" width={280} height={150} />  
            <span className='relative top-2 flex justify-center items-center'>Fasion Box</span>
            <div className="relative top-10 ml-2 flex items-end gap-9">
            <GetNowButton />
            <span>27 $</span>
            </div> 
            </div>

            <div className="bg-blue-100 pb-13 rounded-xl inline-block">
            <Image className="h-40 w-auto object-cover rounded-xl transition-transform duration-300
             hover:scale-108 hover:opacity-85 " src="/image10.png" alt="product2" width={280} height={150} />
            <span className='relative top-2 flex justify-center items-center'>Phone Cover</span>
            <div className="relative top-10 ml-2 flex items-end gap-9">
            <GetNowButton />
            <span>8 $</span>
            </div> 
            </div>


            <div className="bg-blue-100 pb-13 rounded-xl inline-block">
            <Image className="h-40 w-auto object-cover rounded-xl transition-transform duration-300
             hover:scale-108 hover:opacity-85 " src="/image3.png" alt="product3" width={280} height={80} />
            <span className='relative top-2 flex justify-center items-center'>Smart Watch</span>
            <div className="relative top-10 ml-2 flex items-end gap-4">
            <GetNowButton />
            <span>120$</span>
            </div> 
            </div>


            <div className="bg-blue-100 pb-13 rounded-xl inline-block">
            <Image className="h-40 w-auto object-cover rounded-xl transition-transform duration-300
             hover:scale-108 hover:opacity-85 " src="/image8.png" alt="product4" width={280} height={80} />
            <span className='relative top-2 flex justify-center items-center'>Security Camera</span>
            <div className="relative top-10 ml-2 flex items-end gap-9">
            <GetNowButton />
            <span>80 $</span>
            </div> 
            </div>
            </div>

         
          <div className="flex flex-wrap justify mt-5 gap-6">
          <div className="bg-blue-100 pb-13 rounded-xl inline-block">
            <Image className="h-40 w-auto object-cover rounded-xl transition-transform duration-300
             hover:scale-108 hover:opacity-85 " src="/image4.png" alt="product1" width={280} height={150} />
            <span className='relative top-2 flex justify-center items-center'>Smart Watch</span>
            <div className="relative top-10 ml-2 flex items-end gap-9">
            <GetNowButton />
            <span>70 $</span>
            </div> 
            </div>



            <div className="bg-blue-100 pb-13 rounded-xl inline-block">
            <Image className="h-40 w-auto object-cover rounded-xl transition-transform duration-300
             hover:scale-108 hover:opacity-85 " src="/image6.png" alt="product2" width={280} height={150} />
            <span className='relative top-2 flex justify-center items-center'>Shoes</span>
            <div className="relative top-10 ml-2 flex items-end gap-9">
            <GetNowButton />
            <span>10 $</span>
            </div> 
            </div>


            <div className="bg-blue-100 pb-13 rounded-xl inline-block">
            <Image className="h-40 w-auto object-cover rounded-xl transition-transform duration-300
             hover:scale-108 hover:opacity-85 " src="/image7.png" alt="product3" width={280} height={80} />
              <span className='relative top-2 flex justify-center items-center'>Camera</span>
            <div className="relative top-10 ml-2 flex items-end gap-9">
            <GetNowButton />
            <span>300 $</span>
            </div> 
            </div>

            <div className="bg-blue-100 pb-13 rounded-xl inline-block">
            <Image className="h-40 w-auto object-cover rounded-xl transition-transform duration-300
             hover:scale-108 hover:opacity-85 " src="/image9.png" alt="product4" width={280} height={80} />
            <span className='relative top-2 flex justify-center items-center'>Super Case</span>
            <div className="relative top-10 ml-2 flex items-end gap-9">
            <GetNowButton />
            <span>800 $</span>
            </div> 
            </div>
          </div>
        </div>
  )
}

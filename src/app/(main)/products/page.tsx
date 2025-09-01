

import Image from "next/image";
import GetNowButton, { GetNowButtonProps } from '@/components/button';
import Link from "next/link";



 async function Products() {

     const result = await fetch("http://localhost:3004/products");
     const  data = (await result.json()) as GetNowButtonProps[];

     
  return (
       <div className="flex flex-col items-center w-full mt-8">
         
      <h1 className="text-white text-3xl mb-6">Populer Gift Collections</h1> 
   
      <div className="grid grid-cols-4 justify-center gap-6">
     {data.map(item => (
      <Link key={item.id} href={`/products/${item.id}`}>
          <div className="bg-blue-100 pb-13 rounded-xl inline-block">

            <Image className="h-40 w-auto object-cover rounded-xl transition-transform duration-300
             hover:scale-108 hover:opacity-85" src={item.image} alt="product1" width={280} height={150} />  
            <span className='relative top-2 flex justify-center items-center'>{item.title}</span>
            <div className="relative top-10 ml-2 flex items-end gap-9">
            <GetNowButton {...item}/>
            <span>{item.price} $</span>
            </div> 
            
            </div>
            </Link>
            ))}
</div>
          </div>
       
  )
}
export default Products;
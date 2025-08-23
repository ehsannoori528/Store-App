import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full mt-8 min-h-screen justify-center">
      {/* متن‌ها */}
      <h1 className="text-4xl font-semibold mb-2">Shop Prime</h1>
      <h1 className="text-white text-3xl mb-6">Big Deal Days</h1>

      {/* ردیف عکس‌ها */}
      <div className="flex flex-wrap justify gap-4">
        <div className="bg-white flex flex-col pt-3 pr-3 pl-3 pb-3 rounded-xl">
          <span className="ml-2 font-bold mb-1">Fasions</span>
        <Image className="h-40 w-auto object-cover rounded-xl hover:h-41 hover:opacity-85 " src="/product1.jpg" alt="product1" width={280} height={150} /></div>
        <div className="bg-white flex flex-col pt-3 pr-3 pl-3 pb-3 rounded-xl">
        <span className="ml-2 font-bold mb-1">Technologies </span>
        <Image className="h-40 w-auto object-cover rounded-xl hover:h-41 hover:opacity-85 " src="/product2.png" alt="product2" width={280} height={150} /></div>
        <div className="bg-white flex flex-col pt-3 pr-3 pl-3 pb-3 rounded-xl">
        <span className="ml-2 font-bold mb-1">Shoes</span>
        <Image className="h-40 w-auto object-cover rounded-xl hover:h-41 hover:opacity-85 " src="/product3.png" alt="product3" width={280} height={80} /></div>
        <div className="bg-white flex flex-col pt-3 pr-3 pl-3 pb-3 rounded-xl">
        <span className="ml-2 font-bold mb-1">Camera</span>
        <Image className="h-40 w-auto object-cover rounded-xl hover:h-41 hover:opacity-85 " src="/product4.png" alt="product4" width={280} height={80} /></div>
        
      </div>
      <div className="flex flex-wrap justify mt-5 gap-4">
        <Image className="h-40 w-auto object-cover rounded-xl hover:h-41 hover:opacity-85 " src="/product5.png" alt="product1" width={280} height={150} />
        <Image className="h-40 w-auto object-cover rounded-xl hover:h-41 hover:opacity-85 " src="/product6.png" alt="product2" width={280} height={150} />
        <Image className="h-40 w-auto object-cover rounded-xl hover:h-41 hover:opacity-85 " src="/product7.png" alt="product3" width={280} height={80} />
        <Image className="h-40 w-auto object-cover rounded-xl hover:h-41 hover:opacity-85 " src="/product8.png" alt="product4" width={280} height={80} />
        
      </div>
    </div>
  );
}
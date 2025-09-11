// /app/products/page.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function Products() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(products => setData(products))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="flex flex-col items-center w-full mt-8">
      <h1 className="text-white text-3xl mb-6">Populer Gift Collections</h1>
      {data.length === 0 && <p>در حال بارگذاری...</p>}
      <div className="grid grid-cols-4 gap-6 ">
        {data.map(item => (
          <Link key={item.id} href={`/products/${item.id}`}>
            <div className="bg-blue-100 p-4 rounded-3xl cursor-pointer hover:scale-105 transition-transform duration-300">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-xl hover:opacity-85" />
              <h2 className="mt-2 font-semibold">{item.name}</h2>
              <p className="text-lg">{item.price} $</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

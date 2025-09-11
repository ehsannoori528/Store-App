// /app/products/[id]/page.tsx
import { GetNowButtonProps } from "@/components/button";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface ProductPageProps {
params: Promise<{id : string}>;

}

export default async function ProductPage({ params }: ProductPageProps) {
    const {id} = await params;

    function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL; // اگر دستی ست شده
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`; // دامنه‌ی خودکار Vercel
  }

  return "http://localhost:3000"; // حالت لوکال
  
}
const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/api/products/${(await params).id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <p> محصولات ما</p>;
  }

  const product = (await res.json());

  return (
    <div className="max-w-2xl min-h-screen mx-auto p-4 mt-20">
    
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <Image src={product.image} alt={product.name} width={400} height={400} className="w-60 rounded-4xl mb-4 hover:bg-white hover:opacity-85 hover:transition-transform duration-300 hover:scale-110" />
      <p className="font-semibold text-md">Price: ${product.price}</p>

    </div>
  );
}

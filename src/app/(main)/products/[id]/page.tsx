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
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const {id} = params;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <p>محصول یافت نشد</p>;
  }

  const product = (await res.json()) as GetNowButtonProps;

  return (
    <div className="max-w-2xl min-h-screen mx-auto p-4 mt-20">
    
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <Image src={product.image} alt={product.name} width={400} height={400} className="w-60 rounded-4xl mb-4 hover:bg-white hover:opacity-85 hover:transition-transform duration-300 hover:scale-110" />
      <p className="font-semibold text-md">Price: ${product.price}</p>

    </div>
  );
}

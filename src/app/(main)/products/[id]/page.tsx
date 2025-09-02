import Image from "next/image";
import { GetNowButtonProps } from "@/components/button";


interface productProps  {
  params: Promise<{id : string}>;
  searchParams: Promise<{}>;

}
async function ProductPage(  {params} : productProps) {

  const {id} = await params;

  const result = await fetch(`http://localhost:3004/products/${id}`);
  const  data = (await result.json()) as GetNowButtonProps;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <Image
        src={data.image}
        width={400}
        height={400}
        alt={"product1"}
        className="rounded-lg mb-4"
      />
      
      <p className="font-semibold text-lg">Price: ${data.price}</p>
    </div>
  );
}
export default ProductPage;
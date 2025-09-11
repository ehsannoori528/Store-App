import { NextResponse } from "next/server";

const data = [


     {id: "1", name: "Fasion Box",      price: 27,   image: "/image1.jpg" },
    { id: "2", name: "Phone Cover",     price: 8,    image: "/image10.png" },
    { id: "3", name: "Smart Watch",     price: 80,   image: "/image3.png" },
    { id: "4", name: "Security Camera", price: 200 , image: "/image8.png" },
    { id: "5", name: "Smart Watch",     price: 70,   image: "/image4.png" },
    { id: "6", name: "Shoes",           price: 10,   image: "/image6.png" },
    { id: "7", name: "Camera",          price: 300 , image: "/image7.png" },
    { id: "8", name: "Super Case",      price: 800 , image: "/image9.png" }
 
];

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const product = data.find((p) => p.id === params.id);

  if (!product) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}

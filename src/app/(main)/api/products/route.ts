// /app/api/products/route.ts
import { NextResponse } from "next/server";
import products from "../../../../db.json"; // مسیر درست نسبت به route.ts

export async function GET() {
  return NextResponse.json(products.products || []); // فقط آرایه محصولات
}

interface PageProps {
  params: {
    productid: string;
  };
}

export default function ProductPage({ params }: PageProps) {
  return (
    <div>
      <h1>Product ID: {params.productid}</h1>
    </div>
  );
}

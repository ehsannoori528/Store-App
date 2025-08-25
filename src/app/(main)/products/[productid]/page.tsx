import React from 'react'

const MyProducts = ({params}: {

  params: {
    productid: string
  }

} ) => {
  return (

    <div>
        {params.productid}
    </div>

  );
}
export default MyProducts;
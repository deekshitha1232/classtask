import React from 'react'
import Product from "/product"
function products() {
    const products=[
        {id:1,name:"laptop",cost:55000},
        {id:2,name:"mobile",cost:15000}

    ]
  return (

  <div>
    {products.map((Product)=>(<Product key={Product.id}product={product}/>))}
    </div>
    
  )
}

export default products

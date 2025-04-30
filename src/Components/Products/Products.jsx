import Product from '../Products/Product'

const Products = () => {
  const products = [
    { id: 1, name: 'laptop', cost: 55000 },
    { id: 2, name: 'mobile', cost: 15000 }
  ]

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      {products.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </div>
  )
}

export default Products

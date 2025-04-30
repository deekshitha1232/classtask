const Product = ({ product }) => {
  return (
    <div style={{
      border: '1px solid black',
      padding: '16px',
      width: '180px',
      textAlign: 'center'
    }}>
      <h3>{product.name}</h3>
      <p>Cost: Rs{product.cost}</p>
    </div>
  );
};

export default Product;


export default function ProductCard({ product }) {
  return (
    <div className="products">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <img 
            src={product.image} 
            alt={`Photo of ${product.title}`} 
            className="product-img"/>
          <h2>{`Price: ${product.price} USD`}</h2>
    </div>
  );
}

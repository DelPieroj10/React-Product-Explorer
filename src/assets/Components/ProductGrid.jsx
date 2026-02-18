import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <>
      {products.map((product) => (
        < ProductCard
          product={product} 
          key={product.id}/>
      ))}
    </>
  );
}

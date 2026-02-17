import { Routes, Route } from "react-router-dom";
import useProducts from "./assets/Hooks/useProducts";
import "./App.css";

export default function App (){
  const { products, error, loading, setSearch, categories, setCategory, setSortOrder, setCurrentPage, currentPage, totalPages } = useProducts();

  return (
    <div>
      <h1>Product Explorer</h1>
      <hr />

      <input 
      type="text"
      placeholder="Search products..."
      onChange={(e) => setSearch(e.target.value)}
      />
      <select onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option value={cat} key={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select onChange={(e) => setSortOrder(e.target.value)} name="sort">
        <option value="default">Sort by</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>

      {loading && <p>Loading products...</p>}
      {error && <p>Error: {error}</p> }

      {products.map(product => (
        <div className="products"
          key={product.id}
        >
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <img src={product.image} alt={`Photo of ${product.title}`} className="product-img"/>
          <h2>{`Price: ${product.price} USD`}</h2>
        </div>
      ))}

      <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
      >
      <strong>Previous</strong>
      </button>

      <span> Page {currentPage} of {totalPages} </span>
      
      <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
      >
      <strong>Next</strong>      
      </button>

    </div>
  )
}


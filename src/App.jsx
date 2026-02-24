import { Routes, Route } from "react-router-dom";
import useProducts from "./assets/Hooks/useProducts";
import Filters from "./assets/Components/Filters";
import ProductGrid from "./assets/Components/ProductGrid";
import Pagination from "./assets/Components/Pagination";
import { SkeletonGrid } from "./assets/Skeleton_Component/SkeletonGrid";
import "./App.css";
import "./assets/Skeleton_Component/skeleton.css";

export default function App() {
  const {
    products,
    error,
    loading,
    setSearch,
    categories,
    setCategory,
    setSortOrder,
    setCurrentPage,
    currentPage,
    totalPages,
  } = useProducts();

  return (
    <div>
      <h1>Product Explorer</h1>
      <hr />

      <Filters
        setSearch={setSearch}
        categories={categories}
        setCategory={setCategory}
        setSortOrder={setSortOrder}
      />

      {loading? (
        <SkeletonGrid count={6}/>
      ) : (
        <ProductGrid products={products} />
      )}

      {error && <p>Error: {error}</p>}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

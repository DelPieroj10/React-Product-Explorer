import { useState, useEffect, useMemo } from "react";
import { getProducts } from "../Service/productsApi";
import usePagination from "./usePagination";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [debouncedProduct, setDebouncedProduct] = useState("");
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");
  
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  
  useEffect (()=> {
    const timerId = setTimeout(() => {
      setDebouncedProduct(search);
    }, 300);
    return () => clearTimeout(timerId);
  }, [search]);
  
  const categories = ["all", ...new Set(products.map(p => p.category))];
  

  const productsFiltered = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
      .toLowerCase()
      .includes(debouncedProduct?.toLowerCase());
      
      const matchesCategory = category === "all" || product.category === category;
      
      return matchesSearch && matchesCategory;
    });
  }, [products, debouncedProduct, category])
  
  const sortedProducts = useMemo(() => {
    const sorted = [...productsFiltered].sort((a, b) => {
      if(sortOrder === "price-asc") return a.price - b.price;
      if(sortOrder === "price-desc") return b.price - a.price;
      return 0;
    });
    return sorted;
  }, [productsFiltered, sortOrder]);
  
  const { 
    currentPage,
    totalPages,
    paginatedData,
    setCurrentPage 
  } = usePagination(sortedProducts, 6);
  
  return {
    products: paginatedData,
    categories,
    setCategory,
    setSearch,
    setSortOrder,
    setCurrentPage,
    currentPage,
    totalPages,
    error,
    loading,
  };
}

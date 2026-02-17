import { useState, useEffect } from "react";
import { getProducts } from "../Service/productsApi";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [debouncedProduct, setDebouncedProduct] = useState("");
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

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
  }, [search, products]);

  const categories = ["all", ...new Set(products.map(p => p.category))];

  const productsFiltered = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(debouncedProduct?.toLowerCase());

      const matchesCategory = category === "all" || product.category === category;

      return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...productsFiltered].sort((a, b) => {
    if(sortOrder === "price-asc"){
      return a.price - b.price;
    }
    if(sortOrder === "price-desc"){
      return b.price - a.price;
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const startIndex = (currentPage -1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const paginatedProducts = sortedProducts.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, sortOrder]);

  return {
    products: paginatedProducts,
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

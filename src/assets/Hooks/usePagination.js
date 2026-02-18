import { useState, useEffect, useMemo } from "react";

export default function usePagination( data, itemsPerPage = 6) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage -1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, itemsPerPage, currentPage]);
    
  
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0  ) {
      setCurrentPage(totalPages);
    }
  }, [totalPages]); 
  
  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  return {
    currentPage,
    totalPages,
    paginatedData,
    setCurrentPage
  };
}

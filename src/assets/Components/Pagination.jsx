export default function Pagination({ currentPage, totalPages, setCurrentPage }) {
  return (
    <div>
      <button
        onClick={() => 
          setCurrentPage((prev) => Math.max(prev - 1, 1))
       }
        disabled={currentPage === 1}
      >
        <strong>Previous</strong>
      </button>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => setCurrentPage((prev) => 
          Math.min(prev + 1, totalPages)
        )}
          disabled={currentPage === totalPages}
      >
        <strong>Next</strong>
      </button>
    </div>
  );
}

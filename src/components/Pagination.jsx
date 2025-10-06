import React from "react";

const Pagination = ({ page, setPage, totalPages }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center items-center mt-6 space-x-2">
      <button
        onClick={() => page > 1 && setPage(page - 1)}
        disabled={page === 1}
        className={`px-3 py-1 rounded-md text-sm font-medium ${page === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
          }`}
      >
        Prev
      </button>

      {pages.map((num) => (
        <button
          key={num}
          onClick={() => handleClick(num)}
          className={`px-4 py-2 rounded-md font-semibold transition-all duration-200 ${num === page
              ? "bg-indigo-600 text-white shadow-md scale-105"
              : "bg-white text-indigo-700 border border-indigo-300 hover:bg-indigo-50"
            }`}
        >
          {num}
        </button>
      ))}

      <button
        onClick={() => page < totalPages && setPage(page + 1)}
        disabled={page === totalPages}
        className={`px-3 py-1 rounded-md text-sm font-medium ${page === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
          }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

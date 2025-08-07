import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axiosInstance from "../../Utils/axiosInstance";
import Loading from "../../Loading/Loading";
import cardVariants from "./cardVariants";
import { Link } from "react-router";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axiosInstance(`/allIndoorPlants?page=${page}&limit=${limit}&search=${searchTerm}`)
      .then((res) => {
        setProducts(res.data.data);
        setTotalPages(res.data.totalPages);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [page, limit, searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    setSearchTerm(searchInput.trim());
  };

  const handleClearSearch = () => {
    setSearchInput("");
    setSearchTerm("");
    setPage(1);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <form onSubmit={handleSearch} className="flex justify-center mb-6 gap-2">
        <input
          type="text"
          name="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search plants by name..."
          className="input cursor-target input-bordered w-full max-w-xs"
        />
        <button
          type="submit"
          className="btn cursor-target bg-gradient-to-r from-green-400 to-green-500 text-white"
        >
          Search
        </button>
        {searchTerm && (
          <button
            type="button"
            onClick={handleClearSearch}
            className="btn btn-outline cursor-pointer cursor-target"
          >
            Clear
          </button>
        )}
      </form>

      {products.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {products.map((product, index) => (
            <Link to={`/productsDetails/${product?._id}`}>
              <motion.div
                key={index}
                className="card bg-base-100  cursor-target cursor-pointer shadow-xl"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                style={{ originX: 0.5, originY: 0.5 }}
              >
                <figure>
                  <img
                    src={product?.image || "https://via.placeholder.com/300"}
                    alt={product.name}
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-green-500">{product?.name}</h2>
                  <p className="text-green-400 font-semibold text-lg">
                    ৳ {product?.price?.toLocaleString("en-BD")}
                  </p>

                  <div className="flex items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={
                          star <= product?.rating
                            ? "text-yellow-400 text-lg"
                            : "text-gray-300 text-lg"
                        }
                      >
                        ★
                      </span>
                    ))}
                    <span className="ml-1 text-sm text-green-600 font-medium">
                      {product?.rating} / 5
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      ) : (
        <p className="text-center font-bold text-red-500  mt-6">
          No products found.
        </p>
      )}

      {totalPages > 1 && (
        <div className="join flex cursor-target justify-center mt-10">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="join-item btn hover:bg-green-500 hover:text-white"
          >
            Prev
          </button>

          {[...Array(totalPages).keys()].map((num) => (
            <button
              key={num}
              onClick={() => setPage(num + 1)}
              className={`join-item btn ${
                page === num + 1
                  ? "btn-active bg-green-500 text-white"
                  : "border-2"
              }`}
            >
              {num + 1}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="join-item hover:bg-green-500 hover:text-white btn"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;

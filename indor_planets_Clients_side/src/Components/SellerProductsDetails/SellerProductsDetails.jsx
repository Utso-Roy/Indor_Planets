import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams, useNavigate } from "react-router";
import axiosInstance from "../../Utils/axiosInstance";
import { FaArrowLeft } from "react-icons/fa";
import Loader from "../../Loading/Loader";

const SellerProductsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isPending, isError } = useQuery({
    queryKey: ["addProductsData"],
    queryFn: () => axiosInstance("/addProductsData").then((res) => res.data),
  });

  if (isPending) return <Loader></Loader>
  if (isError) return <p className="text-center mt-10 text-red-500">Error loading data</p>;

  const selectedProduct = data.find((item) => item._id === id);
  if (!selectedProduct) return <p className="text-center mt-10 text-gray-500">Product not found</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto bg-base-200 rounded-lg shadow-2xl  shadow-green-200 mt-10">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-green-600 hover:text-green-800 mb-4 cursor-pointer"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>

      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={selectedProduct?.image}
            alt={selectedProduct?.name}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Details */}
        <div className="md:w-1/2 space-y-3">
          <h2 className="text-2xl font-bold text-green-600">{selectedProduct?.name}</h2>
          <p><span className="font-semibold">Description:</span> {selectedProduct?.description}</p>
          <p><span className="font-semibold">Category:</span> {selectedProduct?.category}</p>
          <p><span className="font-semibold">Price:</span> ৳ {selectedProduct?.price?.toLocaleString("en-BD")}</p>
          <p><span className="font-semibold">Is New:</span> {selectedProduct?.isNew ? "Yes" : "No"}</p>
          <p><span className="font-semibold">Is Best:</span> {selectedProduct?.isBest ? "Yes" : "No"}</p>
        </div>
      </div>
    </div>
  );
};

export default SellerProductsDetails;

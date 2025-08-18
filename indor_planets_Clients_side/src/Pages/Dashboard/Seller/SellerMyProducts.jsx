import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../../Utils/axiosInstance";
import Loader from "../../../Loading/Loader";
import { toast } from "react-toastify";
import { Link } from "react-router";

const SellerMyProducts = () => {
  const queryClient = useQueryClient();

  const { data: products = [], isPending } = useQuery({
    queryKey: ["addProductsData"],
    queryFn: () =>
      axiosInstance.get("/addProductsData").then((res) => res.data),
  });

  const deleteProductMutation = useMutation({
    mutationFn: (id) => axiosInstance.delete(`/addProductsData/${id}`),
    onSuccess: () => {
      toast.success("Product deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["addProductsData"] });
    },
    onError: () => {
      toast.error("Failed to delete product.");
    },
  });

  const handleClick = (id) => {

    deleteProductMutation.mutate(id);


  };

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="max-w-6xl mx-auto mt-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-green-600">
        My Uploaded Products
      </h2>

      <div className="overflow-x-auto shadow-xl rounded-lg">
        <div className="max-h-[500px] overflow-y-auto">
          <table className="table table-zebra">
            <thead className="sticky top-0 bg-green-100 text-green-800 font-semibold z-10">
              <tr>
                <th>Number</th>
                <th>Product</th>
                <th>Category</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, index) => (
                <tr key={product?._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-14 h-14">
                        <img
                          src={product?.image}
                          alt={product?.name}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="capitalize">{product?.category}</td>
                  <td>
                    <span
                      className={`rounded-full text-gray-700 ${
                        product?.status === "Pending"
                          ? "bg-amber-500 text-white"
                          : product?.status === "Reject"
                          ? "bg-red-500 text-white"
                          : "bg-green-500 text-white"
                      } py-1 px-4`}
                    >
                      {product?.status}
                    </span>
                  </td>
                  <td className="flex items-center mt-3 gap-2">
                    <Link to={`/dashboard/sellerDetailsPage/${product?._id}`}>
                      <button className="btn btn-sm bg-blue-500 hover:bg-blue-700 text-base-200">
                        Details
                      </button>
                    </Link>
                    <button
                      onClick={() => handleClick(product._id)}
                      className="btn btn-sm bg-red-500 hover:bg-red-700 text-base-200"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {products?.length === 0 && (
          <p className="text-center py-10 font-medium text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default SellerMyProducts;

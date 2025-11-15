import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../../Utils/axiosInstance";
import Loader from "../../../Loading/Loader";
import { toast } from "react-toastify";
import { Link } from "react-router";

const AdminManageProducts = () => {
  const queryClient = useQueryClient();

  const { data: products = [], isPending } = useQuery({
    queryKey: ["addProductsData"],
    queryFn: () =>
      axiosInstance.get("/addProductsData").then((res) => res.data),
  });

  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }) =>
      axiosInstance.patch(`/addProductData/${id}`, { status }),
    onSuccess: () => {
      toast.success("Status updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["addProductsData"] });
    },
    onError: () => {
      toast.error("Failed to update status.");
    },
  });

  const handleStatusChange = (id, newStatus) => {
    updateStatusMutation.mutate({ id, status: newStatus });
  };

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="max-w-6xl mx-auto mt-4 px-4">
      <h2 className="text-2xl font-bold text-center mb-6 
      text-green-600 dark:text-green-400">
        My Uploaded Products
      </h2>

      <div className="overflow-x-auto shadow-xl rounded-lg 
      bg-gray-50 dark:bg-gray-900 
      dark:shadow-green-900">
        <div className="max-h-[500px] overflow-y-auto">
          <table className="table table-zebra w-full 
          dark:text-gray-200 text-gray-800">
            <thead
              className="sticky top-0 z-10 
              bg-green-100 dark:bg-green-900 
              text-green-800 dark:text-green-200 
              font-semibold"
            >
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
                <tr
                  key={product?._id}
                  className="border-t border-gray-200 
                  dark:border-gray-700 
                  text-green-500
                  hover:bg-gray-50 dark:hover:bg-gray-400 
                  transition-colors"
                >
                  <td className="dark:text-gray-200 ">{index + 1}</td>

                  <td className="dark:text-gray-200 ">
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

                  <td className="capitalize dark:text-gray-200">{product?.category}</td>

                  <td>
                    <select
                      className={`
                        select select-sm 
                        cursor-pointer 
                        border-gray-300 dark:border-gray-600 
                        text-white 
                        ${
                          product?.status === "Pending"
                            ? "bg-amber-500"
                            : product?.status === "Reject"
                            ? "bg-red-500"
                            : "bg-green-500"
                        }
                      `}
                      value={product?.status || "Pending"}
                      onChange={(e) =>
                        handleStatusChange(product._id, e.target.value)
                      }
                    >
                      <option value="Pending">Pending</option>
                      <option value="Accept">Accept</option>
                      <option value="Reject">Reject</option>
                    </select>
                  </td>

                  <td>
                    <Link to={`/dashboard/sellerDetailsPage/${product?._id}`}>
                      <button
                        className="btn btn-sm cursor-target 
                        bg-blue-500 hover:bg-blue-700 
                        border-none
                        dark:bg-blue-600 dark:hover:bg-blue-800 
                        text-white"
                      >
                        Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {products?.length === 0 && (
          <p className="text-center py-10 font-medium 
          text-gray-500 dark:text-gray-300">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminManageProducts;

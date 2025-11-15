import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { FaStar } from "react-icons/fa";
import axiosInstance from "../../../Utils/axiosInstance";
import Loader from "../../../Loading/Loader";
import { Link } from "react-router";
import { toast } from "react-toastify";

const AdminManageReview = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["reviewData"],
    queryFn: () => axiosInstance.get("/reviewData").then((res) => res.data),
  });

  const handleClick = async (id) => {
    try {
      const res = await axiosInstance.patch(`/reviewData/${id}`, {
        showInHome: true,
      });

      if (res.data?.modifiedCount > 0) {
        toast.success("Successfully added to homepage section!");
        queryClient.invalidateQueries(["reviewData"]);
      } else {
        toast.warning("This product already added!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update review.");
    }
  };

  if (isLoading) return <Loader />;
  if (error)
    return (
      <p className="text-center text-red-500 dark:text-red-400 py-6">
        Failed to load reviews
      </p>
    );

  return (
    <div className="max-w-4xl  mx-auto px-4 py-6">
      {/* Title */}
      <h2
        className="text-2xl text-center font-semibold mb-6 
      text-green-600 dark:text-green-400"
      >
        Manage Reviews
      </h2>

      {/* Table Container */}
      <div
        className="overflow-x-auto rounded-lg shadow-2xl 
        shadow-green-100 dark:shadow-green-900 
        bg-white dark:bg-gray-800"
      >
        <table className="table w-full">
          {/* Table Header */}
          <thead
            className="bg-green-100 dark:bg-green-900 
            text-sm text-green-700 dark:text-green-200"
          >
            <tr>
              <th className="py-2 px-3 text-left">Number</th>
              <th className="py-2 px-3 text-left">User Name</th>
              <th className="py-2 px-3 text-left">Rating</th>
              <th className="py-2 px-3 text-left">Review</th>
              <th className="py-2 px-3 text-left">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="dark:bg-gray-800 dark:text-gray-200">
            {data?.map((review, index) => (
              <tr
                key={review?._id}
                className="border-t border-gray-200 dark:border-gray-700 
                hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="py-2 text-green-700 dark:text-green-300 px-3">
                  {index + 1}
                </td>

                <td className="py-2 text-green-700 dark:text-green-300 px-3 break-all">
                  {review?.user || "Unknown"}
                </td>

                <td className="py-2 px-3 text-yellow-500 font-medium flex items-center gap-1">
                  <FaStar /> {review?.rating || 0}
                </td>

                <td className="py-2 px-3 text-green-700 dark:text-green-300 break-words max-w-xs">
                  <span className="line-clamp-2">
                    {review?.textArea || "No comment"}
                  </span>
                </td>

                {/* Buttons */}
                <td className="py-2 px-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    {/* Details */}
                    <Link
                      to={`/dashboard/reviewDetailsPage/${review?.reviewId}`}
                    >
                      <button
                        className="btn btn-sm cursor-target 
                        border-none
                        bg-blue-500 hover:bg-blue-600 
                        dark:bg-blue-600 dark:hover:bg-blue-700 
                        text-white w-full sm:w-auto"
                      >
                        Details
                      </button>
                    </Link>

                    {/* Add to Home */}
                    <button
                      onClick={() => handleClick(review?.reviewId)}
                      disabled={review?.showInHome}
                      className={`btn btn-sm cursor-target border-none text-white dark:text-white w-full sm:w-auto ${
                        review?.showInHome
                          ? "!bg-gray-300 dark:bg-gray-600 cursor-not-allowed"
                          : "bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800"
                      }`}
                    >
                      {review?.showInHome
                        ? "Already Added"
                        : "Add Review Section"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {/* No Data */}
            {data?.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="text-center text-gray-500 dark:text-gray-400 py-6"
                >
                  No reviews found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminManageReview;

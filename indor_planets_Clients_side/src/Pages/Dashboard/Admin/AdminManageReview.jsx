import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { FaStar } from "react-icons/fa";
import axiosInstance from "../../../Utils/axiosInstance";
import Loader from "../../../Loading/Loader";
import { Link } from "react-router";
import { toast } from "react-toastify";

const AdminManageReview = () => {
  const queryClient = useQueryClient(); // needed for cache invalidation

  const { data, isLoading, error } = useQuery({
    queryKey: ["reviewData"],
    queryFn: () => axiosInstance.get("/reviewData").then((res) => res.data),
  });

  const handleClick = async (id) => {
    try {
      const res = await axiosInstance.patch(`/reviewData/${id}`, {
        showInHome:true, 
      });

      if (res.data?.modifiedCount > 0) {
        toast.success("Successfully added to homepage section!");
        queryClient.invalidateQueries(["reviewData"]); 
      } else {
        toast.warning("This product added already");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update review.");
    }
  };

  if (isLoading) return <Loader />;
  if (error)
    return (
      <p className="text-center text-red-500 py-6">
        Failed to load reviews
      </p>
    );

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-2xl text-center text-green-600 font-semibold mb-6">
        Manage Reviews
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-2xl shadow-green-100">
        <table className="table w-full">
          <thead className="bg-green-100 sticky top-0 text-sm md:text-green-700">
            <tr>
              <th className="py-2 px-3 text-left">Number</th>
              <th className="py-2 px-3 text-left">User Name</th>
              <th className="py-2 px-3 text-left">Rating</th>
              <th className="py-2 px-3 text-left">Review</th>
              <th className="py-2 px-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((review, index) => (
              <tr
                key={review?._id}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="py-2 px-3">{index + 1}</td>
                <td className="py-2 px-3 break-all">
                  {review?.user || "Unknown"}
                </td>
                <td className="py-2 px-3 text-yellow-500 font-medium flex items-center gap-1">
                  <FaStar /> {review?.rating || 0}
                </td>
                <td className="py-2 px-3 break-words max-w-xs">
                  <span className="line-clamp-2">
                    {review?.textArea || "No comment"}
                  </span>
                </td>
                <td className="py-2 px-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      to={`/dashboard/reviewDetailsPage/${review?.reviewId}`}
                    >
                      <button className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white w-full sm:w-auto">
                        Details
                      </button>
                    </Link>
                    <button
                      onClick={() => handleClick(review?.reviewId)}
                      disabled={review?.showInHome} 
                      className={`btn btn-sm text-white w-full sm:w-auto ${
                        review?.showInHome
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-green-500 hover:bg-green-600"
                      }`}
                    >
                      {review?.showInHome ? "Already Added" : "Add Review Section"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {data?.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-6">
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

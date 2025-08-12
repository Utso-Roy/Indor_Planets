import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../../Utils/axiosInstance';
import Loader from '../../../Loading/Loader';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const UserPlantReviews = () => {
    const { user } = useContext(AuthContext)
    const { data,isPending } = useQuery({
        queryKey: ['userReviewData', user?.email],
        queryFn : ()=>axiosInstance.get(`/userReviewData/${user?.email}`).then(res=>res.data)
    })
    console.log(data)
    if (isPending) {
        return <Loader></Loader>
    }


    

    

    return (
         <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-2xl text-center text-green-600 font-semibold mb-6">
        Fertilizer Reviews
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-lg">
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
                <td className="py-2 px-3 break-all">{review?.user || "Unknown"}</td>
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
                    <Link to={`/productsDetails/${review?.reviewId}`}>
                      <button className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white w-full sm:w-auto">
                        Details
                      </button>
                    </Link>
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

export default UserPlantReviews;
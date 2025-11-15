import React, { useEffect, useState } from "react";
import axiosInstance from "../../Utils/axiosInstance";
import { FaStar, FaRegStar } from "react-icons/fa";
import '../../../src/marquee.css'
const FertilizerReviewProducts = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    axiosInstance.get("/fertilizerData").then((res) => setReview(res.data));
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) =>
      i + 1 <= rating ? (
        <FaStar key={i} className="text-yellow-500" />
      ) : (
        <FaRegStar key={i} className="text-yellow-500" />
      )
    );
  };

  return (
      <div className="overflow-hidden w-full bg-gray-50 py-4">
          <h2 className="text-center font-semibold text-3xl text-green-600 my-5">Review Section</h2>
  
      <div className="flex animate-marquee space-x-4">
        {[...review, ...review].map((singleData, index) => (
          <div
            key={index}
            className="flex flex-col min-w-[250px] max-w-[250px] divide-y rounded-md border border-gray-300 shadow-md bg-white"
          >
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <img
                  src={singleData?.userImage}
                  alt={singleData.user}
                  className="object-cover w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold dark:text-green-600">{singleData.user}</h4>
                  <span className="text-[8px] text-gray-600">
                    {singleData?.userEmail}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                {renderStars(singleData.rating)}
              </div>
              <p>{singleData.textArea}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FertilizerReviewProducts;
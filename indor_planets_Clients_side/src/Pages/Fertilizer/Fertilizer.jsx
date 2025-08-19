import React, { useEffect, useState } from "react";
import SpotlightCard from "../../SpotlightCard/SpotlightCard";
import Loading from "../../Loading/Loading";
import axiosInstance from "../../Utils/axiosInstance";
import { Link } from "react-router";
import FertilizerReviewProducts from "./FertilizerReviewProducts";

const Fertilizer = () => {
  const [fertilizers, setFertilizers] = useState([]);
  useEffect(() => {
    axiosInstance("/allFertilizer").then((res) => setFertilizers(res.data));
  },[]);

  if (fertilizers.length === 0) {
    return <Loading />;
  }

  

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
      {fertilizers.map((fertilizer) => (
        <Link
          key={fertilizer?._id}
          to={`/fertilizerDetails/${fertilizer?._id}`}
        >
          <SpotlightCard
            className="custom-spotlight-card cursor-target cursor-pointer  shadow-lg rounded-xl overflow-hidden"
            spotlightColor="rgb(167, 243, 208)

"
          >
            <img
              src={fertilizer?.image}
              alt={fertilizer?.name}
              className="w-full object-cover sm:h-46  rounded-md lg:h-66 "
            />
            <div className="p-4">
              <h2 className="font-semibold text-md mb-2">
                {fertilizer?.name}
              </h2>

              <div className=" text-green-800  rounded-lg mb-3">
                Price : ৳ {fertilizer?.price?.toLocaleString("en-BD")}
              </div>
            </div>
          </SpotlightCard>
        </Link>
      ))}
      </div>
      
      <FertilizerReviewProducts></FertilizerReviewProducts>
    </div>
  );
};

export default Fertilizer;

import React, { useEffect, useState } from "react";
import SpotlightCard from "../../SpotlightCard/SpotlightCard";
import Loading from "../../Loading/Loading";
import axiosInstance from "../../Utils/axiosInstance";
import { Link } from "react-router";

const Fertilizer = () => {
  const [fertilizers, setFertilizers] = useState([]);
  useEffect(() => {
    axiosInstance("/allFertilizer").then((res) => setFertilizers(res.data));
  }, []);

  if (fertilizers.length === 0) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
      {fertilizers.map((fertilizer) => (
        <Link to={`/fertilizerDetails/${fertilizer?._id}`}>
          <SpotlightCard
            key={fertilizer?._id}
            className="custom-spotlight-card cursor-target cursor-pointer  shadow-lg rounded-xl overflow-hidden"
            spotlightColor="rgb(167, 243, 208)

"
          >
            <img
              src={fertilizer?.image}
              alt={fertilizer?.name}
              className="w-full rounded-xl h-46 "
            />
            <div className="p-4">
              <h2 className="font-bold text-green-600 text-lg mb-2">
                {fertilizer?.name}
              </h2>

              <div className=" text-green-700 font-semibold rounded-lg mb-3">
                Price : ৳ {fertilizer?.price?.toLocaleString("en-BD")}
              </div>
            </div>
          </SpotlightCard>
        </Link>
      ))}
    </div>
  );
};

export default Fertilizer;

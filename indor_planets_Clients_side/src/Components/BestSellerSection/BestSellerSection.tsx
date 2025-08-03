import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import axiosInstance from "../../Utils/axiosInstance";

interface Plant {
  _id: string;
  name: string;
  image: string;
  price?: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 2,
    },
  },
};

const Loading = () => <div className="text-center py-10">Loading...</div>;

const BestSellerSection = () => {
  const [newData, setNewData] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("/bestSellerCards")
      .then((res) => setNewData(res.data))
      .catch((err) => console.error("Error fetching:", err))
      .finally(() => setLoading(false));
  }, []);

  const sliceData = newData.slice(5, 10);

  if (loading) return <Loading />;

  if (sliceData.length === 0)
    return <p className="text-center mt-10">Products Not Found.</p>;

  console.log(newData)
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {sliceData.map(({ _id, name, image, price }) => (
        <motion.div
          key={_id}
          className="bg-white rounded-lg cursor-target shadow-md overflow-hidden cursor-pointer"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-green-600 font-bold mt-2">
              ${price !== undefined ? price.toFixed(2) : "N/A"}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BestSellerSection;

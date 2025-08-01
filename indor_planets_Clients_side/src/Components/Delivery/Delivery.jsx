import React from 'react';
import { motion } from 'framer-motion';
import {
  FaTruck,
  FaClock,
  FaLeaf,
  FaMapMarkerAlt,
  FaMotorcycle,
  FaShippingFast,
  FaBuilding
} from 'react-icons/fa';
import GradientText from '../GradientText/GradientText';

const Delivery = () => {
  return (
    <div className="bg-green-50 py-10 px-4 md:px-16 overflow-hidden">
      {/* Headline */}
      <h2 className="text-center  text-[2rem] my-3">
          <GradientText
            colors={["#4ade80", "#bef264", "#4ade80"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
           Our Delivery Promise

          </GradientText>
        </h2>

      {/* Scrolling Delivery Features (no pause on hover) */}
      <motion.div
        className="whitespace-nowrap text-green-800 font-medium text-base sm:text-lg flex items-center gap-10"
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        <div className="flex items-center gap-2 min-w-max">
          <FaTruck className="text-green-700" />
          <span>Free Delivery on Orders Over $50</span>
        </div>
        <div className="flex items-center gap-2 min-w-max">
          <FaClock className="text-green-700" />
          <span>Same Day Shipping Available</span>
        </div>
        <div className="flex items-center gap-2 min-w-max">
          <FaLeaf className="text-green-700" />
          <span>100% Eco-Friendly Packaging</span>
        </div>
        <div className="flex items-center gap-2 min-w-max">
          <FaTruck className="text-green-700" />
          <span>Track Your Order in Real-Time</span>
        </div>
      </motion.div>
     

      {/* Delivery Partners */}
      <div className="mt-10 text-center">
         <h2 className="text-center  text-[1.20rem] my-3">
          <GradientText
            colors={["#4ade80", "#bef264", "#4ade80"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            Deliver Through
          </GradientText>
        </h2>
        <div className="flex flex-wrap justify-center gap-6 text-green-700">
          <div className="flex items-center gap-2">
            <FaMotorcycle /> Pathao Express
          </div>
          <div className="flex items-center gap-2">
            <FaShippingFast /> Sundarban Courier
          </div>
          <div className="flex items-center gap-2">
            <FaBuilding /> SA Paribahan
          </div>
          <div className="flex items-center gap-2">
            <FaTruck /> Home Delivery by Green Ghor
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;

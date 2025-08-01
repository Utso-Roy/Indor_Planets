import React from 'react';
import CountUp from 'react-countup';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: 'Aarav Sinha',
    review: 'These indoor plants transformed my home. Great quality!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Maya Rahman',
    review: 'I loved the support and care tips provided!',
    rating: 4,
  },
  {
    id: 3,
    name: 'Tanvir Ahmed',
    review: 'Fast delivery. Healthy plants. Will buy again.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sara Islam',
    review: 'Affordable and beautiful indoor plant collection.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Zahidul Karim',
    review: 'Both times I ordered, the plants were fresh.',
    rating: 4,
  },
];

const cardVariant = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const ReviewSection = () => {
  return (
    <div className="bg-green-50 py-10 px-4 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-sm mt-1">
          Real feedback from our plant-loving customers
        </p>
      </div>

      {/* Review Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {reviews.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-sm"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariant}
          >
            <FaQuoteLeft className="text-xl text-green-500 mb-2" />
            <p className="text-gray-700 mb-2 line-clamp-3">"{item.review}"</p>
            <div className="flex items-center gap-1 text-yellow-500 text-xs mb-1">
              {[...Array(item.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="font-semibold text-green-700 text-sm">{item.name}</p>
          </motion.div>
        ))}
      </div>

      {/* CountUp Section */}
      <motion.div
        className="mt-10 text-center"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-xl font-semibold text-green-800 mb-1">
          Over{' '}
          <CountUp end={1200} duration={3}>
            {({ countUpRef }) => <span ref={countUpRef} />}
          </CountUp>
          + Happy Customers
        </h3>
        <p className="text-gray-600 text-sm">Join our Green Ghor family today!</p>
      </motion.div>
    </div>
  );
};

export default ReviewSection;

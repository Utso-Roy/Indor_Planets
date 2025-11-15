import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import GradientText from '../GradientText/GradientText';
import CountUp from '../CountUp/CountUp';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../Utils/axiosInstance';
import Loading from '../../Loading/Loading';
interface ReviewType {
  _id?: string;
  user?: string;
  userEmail?: string;
  rating?: string | number;
  textArea?: string;
  image?: string;
}

const cardVariant = {
  offscreen: { y: 80, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {  duration: 1 },
  },
};

const ReviewSection: React.FC = () => {
  const {
    data: reviews = [],
    isPending,
    isError,
    error,
  } = useQuery<ReviewType[]>({
    queryKey: ['homeReviewData'],
    queryFn: () => axiosInstance.get('/homeReviewData').then((res) => res.data),
  });

  if (isPending) {
    return <Loading></Loading>
  }

  if (isError) {
    return <p className="text-center text-red-500 py-10">Error: {(error as Error).message}</p>;
  }

  return (
    <div className="bg-green-50 py-14 px-4 md:px-6 ">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-[2rem] my-3">
          <GradientText
            colors={['#4ade80', '#bef264', '#4ade80']}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            What Our Customers Say
          </GradientText>
        </h2>
        <p className="text-gray-600 mt-2 text-sm">See what our plant lovers are saying</p>
      </div>

      {/* Review Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {reviews.map((item, index) => {
          const parsedRating = parseInt(item.rating as string) || 0;

          return (
            <motion.div
              key={item._id || index}
              className="bg-white p-5 rounded-lg shadow-md border border-green-100 hover:shadow-xl transition-all duration-300 flex flex-col"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariant}
            >
              <div className="flex items-center mb-3">
                <img
                  src={item?.image || 'https://i.pravatar.cc/100'}
                  alt={item.user || 'User'}
                  className="w-10 h-10 rounded-full mr-3 border border-green-300"
                />
                <div>
                  <h4 className="text-green-800  font-semibold text-sm">
                    {item.user || 'Anonymous'}
                  </h4>
                  <span className="text-[8px] text-gray-500">
                    {item.userEmail || 'No email'}
                  </span>
                </div>
              </div>
              <FaQuoteLeft className="text-green-500 text-xl mb-2" />
              <p className="text-gray-700 text-sm flex-grow">
                "{item.textArea || 'No review provided.'}"
              </p>
              <div className="flex items-center gap-1 mt-3 text-yellow-500 text-sm">
                {[...Array(parsedRating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CountUp Section */}
      <motion.div
        className="mt-14 text-center"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-green-800 mb-1">
          Over{' '}
          <span>
            <CountUp
              from={1000}
              to={1200}
              separator=","
              direction="up"
              duration={2}
              className="count-up-text"
            />
          </span>{' '}
          + Happy Customers
        </h3>
        <p className="text-gray-600 text-sm">Be a part of our green community today!</p>
      </motion.div>
    </div>
  );
};

export default ReviewSection;

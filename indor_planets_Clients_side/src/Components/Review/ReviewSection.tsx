import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import GradientText from '../GradientText/GradientText';
import CountUp from '../CountUp/CountUp'

const reviews = [
  {
    id: 1,
    name: 'Aarav Sinha',
    date: 'July 12, 2025',
    avatar: 'https://i.pravatar.cc/100?img=1',
    review: 'These indoor plants transformed my home. Great quality!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Maya Rahman',
    date: 'June 25, 2025',
    avatar: 'https://i.pravatar.cc/100?img=2',
    review: 'Excellent customer support and useful plant care tips!',
    rating: 4,
  },
  {
    id: 3,
    name: 'Tanvir Ahmed',
    date: 'May 18, 2025',
    avatar: 'https://i.pravatar.cc/100?img=3',
    review: 'Fast delivery and healthy plants. Totally recommend!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sara Islam',
    date: 'August 1, 2025',
    avatar: 'https://i.pravatar.cc/100?img=4',
    review: 'Beautiful and affordable plant collection. Loved it!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Zahidul Karim',
    date: 'July 5, 2025',
    avatar: 'https://i.pravatar.cc/100?img=5',
    review: 'Ordered twice. Plants were fresh and healthy both times.',
    rating: 4,
  },
];

const cardVariant = {
  offscreen: { y: 80, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.2, duration: 0.7 },
  },
};

const ReviewSection = () => {
  return (
    <div className="bg-green-50 py-14 px-4 md:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-center  text-[2rem] my-3">
          <GradientText
            colors={["#4ade80", "#bef264", "#4ade80"]}
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-2">
        {reviews.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white p-5 rounded-lg shadow-md border border-green-100 hover:shadow-xl transition-all duration-300 flex flex-col"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariant}
          >
            <div className="flex items-center mb-3">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-10 h-10 rounded-full mr-3 border border-green-300"
              />
              <div>
                <h4 className="text-green-800 font-semibold text-sm">{item.name}</h4>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
            </div>
            <FaQuoteLeft className="text-green-500 text-xl mb-2" />
            <p className="text-gray-700 text-sm flex-grow">"{item.review}"</p>
            <div className="flex items-center gap-1 mt-3 text-yellow-500 text-sm">
              {[...Array(item.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </motion.div>
        ))}
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
                  Over 
                  <span>
                      
                       <CountUp
  from={0}
  to={1200}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>
                </span>
          + Happy Customers
        </h3>
        <p className="text-gray-600 text-sm">Be a part of our green community today!</p>
      </motion.div>
    </div>
  );
};

export default ReviewSection;

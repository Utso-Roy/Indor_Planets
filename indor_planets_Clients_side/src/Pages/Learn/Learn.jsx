import React, { useEffect } from "react";
import { FaLeaf, FaSun, FaTint, FaDog } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const learnTopics = [
  {
    title: "Best Light for Indoor Plants",
    description: "Understand which light levels work best for your plant's growth.",
    icon: <FaSun className="text-yellow-500 text-4xl mb-2" />,
  },
  {
    title: "Watering Techniques",
    description: "Learn how often and how much to water different plant types.",
    icon: <FaTint className="text-blue-500 text-4xl mb-2" />,
  },
  {
    title: "Pet-Friendly Plants",
    description: "Know which plants are safe around your pets.",
    icon: <FaDog className="text-pink-500 text-4xl mb-2" />,
  },
  {
    title: "Leaf Care & Maintenance",
    description: "Tips on cleaning and maintaining healthy leaves.",
    icon: <FaLeaf className="text-green-500 text-4xl mb-2" />,
  },
];

const Learn = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-50 px-4 py-16">
      
      {/* Header Section */}
      <div className="text-center mb-14 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
           Learn About Indoor Plants
        </h1>
        <p className="text-gray-700 text-lg">
          Explore useful guides and tips to keep your indoor garden healthy, happy, and thriving.
        </p>
      </div>

      {/* Learning Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {learnTopics.map((topic, idx) => (
          <div
            key={idx}
            data-aos="zoom-in-up"
            data-aos-delay={idx * 100}
            className="bg-white p-8 cursor-target rounded-2xl shadow-md hover:shadow-2xl transition duration-300 text-center border border-green-100"
          >
            <div className="flex justify-center">{topic.icon}</div>
            <h3 className="text-xl font-semibold text-green-600 mb-2 mt-3">{topic.title}</h3>
            <p className="text-gray-600">{topic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;

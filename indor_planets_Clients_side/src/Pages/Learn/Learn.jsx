import React, { useEffect } from "react";
import { FaLeaf, FaSun, FaTint, FaDog } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
const learnTopics = [
  {
    title: "Best Light for Indoor Plants",
    description: "Understand which light levels work best for your plant's growth.",
    icon: <FaSun className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Watering Techniques",
    description: "Learn how often and how much to water different plant types.",
    icon: <FaTint className="text-blue-500 text-3xl" />,
  },
  {
    title: "Pet-Friendly Plants",
    description: "Know which plants are safe around your pets.",
    icon: <FaDog className="text-pink-500 text-3xl" />,
  },
  {
    title: "Leaf Care & Maintenance",
    description: "Tips on cleaning and maintaining healthy leaves.",
    icon: <FaLeaf className="text-green-500 text-3xl" />,
  },
];

const Learn = () => {

    useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <div className="min-h-screen bg-green-100 px-4 py-10">
      {/* Hero Section */}
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-2">Learn About Indoor Plants</h1>
        <p className="text-gray-600">
          Explore useful guides and tips to keep your indoor garden healthy and beautiful.
        </p>
      </div>

      {/* Learning Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {learnTopics.map((topic, idx) => (
          <div
                key={idx}
                data-aos="fade-up"
    data-aos-delay={idx * 100}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <div className="mb-4">{topic.icon}</div>
            <h3 className="text-xl font-semibold text-green-600 mb-2">{topic.title}</h3>
            <p className="text-gray-600">{topic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSun, FaTint, FaBug, FaLeaf, FaCut, FaTimesCircle } from "react-icons/fa";

const careTopics = [
  {
    title: "Proper Light",
    icon: <FaSun className="text-yellow-500 text-3xl" />,
    description: "Most indoor plants prefer bright, indirect light. Avoid direct sunlight for sensitive plants.",
  },
  {
    title: "Watering Schedule",
    icon: <FaTint className="text-blue-500 text-3xl" />,
    description: "Overwatering is the #1 mistake. Water when the topsoil feels dry.",
  },
  {
    title: "Pest Control",
    icon: <FaBug className="text-red-500 text-3xl" />,
    description: "Inspect leaves weekly for pests. Use neem oil or soap sprays for treatment.",
  },
  {
    title: "Leaf Pruning",
    icon: <FaCut className="text-green-600 text-3xl" />,
    description: "Trim yellow or damaged leaves to promote healthy growth.",
  },
  {
    title: "Fertilizing",
    icon: <FaLeaf className="text-lime-500 text-3xl" />,
    description: "Feed your plants monthly using organic fertilizers in growing season.",
  },
  {
    title: "Avoid Mistakes",
    icon: <FaTimesCircle className="text-gray-600 text-3xl" />,
    description: "Don't move plants too often or place near heaters/AC vents.",
  },
];

const PlantCare = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-green-50 px-4 py-10">
      {/* Hero Section */}
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-2">Indoor Plant Care Tips</h1>
        <p className="text-gray-600">
          Take the best care of your green companions with expert tips and regular care routines.
        </p>
      </div>

      {/* Care Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {careTopics.map((item, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-green-600 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantCare;

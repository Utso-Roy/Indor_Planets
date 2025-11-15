import React, { useState, useEffect } from 'react';
import { 
  FaSun, 
  FaTint, 
  FaLeaf, 
  FaDog, 
  FaSeedling,
  FaTemperatureHigh,
  FaBug,
  FaTools,
  FaMoon,
  FaLightbulb,
  FaChevronRight,
  FaBook,
  FaHeart
} from 'react-icons/fa';

const learnTopics = [
  {
    title: "Light Requirements",
    description: "Master the art of providing perfect lighting conditions for your indoor plants. Learn about direct, indirect, and low-light preferences.",
    icon: <FaSun />,
    color: "from-amber-500 to-orange-500",
    darkColor: "from-amber-600 to-orange-600",
    tips: ["Rotate plants weekly", "Use grow lights in winter", "Avoid harsh direct sunlight"]
  },
  {
    title: "Watering Wisdom",
    description: "Discover the secrets to proper watering techniques. Understand soil moisture, drainage, and seasonal watering needs.",
    icon: <FaTint />,
    color: "from-blue-500 to-cyan-500",
    darkColor: "from-blue-600 to-cyan-600",
    tips: ["Check soil before watering", "Use room temperature water", "Ensure proper drainage"]
  },
  {
    title: "Leaf Care & Health",
    description: "Keep your plant leaves vibrant and healthy. Learn cleaning techniques, pest prevention, and common leaf problems.",
    icon: <FaLeaf />,
    color: "from-green-500 to-emerald-500",
    darkColor: "from-green-600 to-emerald-600",
    tips: ["Dust leaves regularly", "Check undersides for pests", "Prune dead leaves promptly"]
  },
  {
    title: "Pet-Safe Plants",
    description: "Create a safe environment for your furry friends. Identify toxic and non-toxic plants for cats and dogs.",
    icon: <FaDog />,
    color: "from-purple-500 to-pink-500",
    darkColor: "from-purple-600 to-pink-600",
    tips: ["Spider plants are safe", "Keep lilies away from cats", "Research before buying"]
  },
  {
    title: "Soil & Fertilization",
    description: "Learn about soil types, nutrients, and feeding schedules to help your plants thrive throughout the year.",
    icon: <FaSeedling />,
    color: "from-lime-500 to-green-500",
    darkColor: "from-lime-600 to-green-600",
    tips: ["Use well-draining soil", "Fertilize during growth season", "Avoid over-fertilizing"]
  },
  {
    title: "Temperature & Humidity",
    description: "Understand optimal temperature ranges and humidity levels for tropical and desert plant varieties.",
    icon: <FaTemperatureHigh />,
    color: "from-red-500 to-rose-500",
    darkColor: "from-red-600 to-rose-600",
    tips: ["Keep away from drafts", "Mist tropical plants", "Group plants for humidity"]
  },
  {
    title: "Pest Control",
    description: "Identify common pests like spider mites and aphids. Learn natural and effective treatment methods.",
    icon: <FaBug />,
    color: "from-yellow-500 to-amber-500",
    darkColor: "from-yellow-600 to-amber-600",
    tips: ["Inspect plants weekly", "Use neem oil spray", "Isolate infected plants"]
  },
  {
    title: "Propagation & Repotting",
    description: "Multiply your plant collection and give your plants room to grow with proper propagation and repotting techniques.",
    icon: <FaTools />,
    color: "from-indigo-500 to-purple-500",
    darkColor: "from-indigo-600 to-purple-600",
    tips: ["Spring is best for repotting", "Use clean tools", "Water after repotting"]
  }
];

const Learn = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleCard = (idx) => {
    setExpandedCard(expandedCard === idx ? null : idx);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`flex cursor-target items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
              darkMode 
                ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' 
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
            }`}
          >
            {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
            <span className="font-medium">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex justify-center items-center gap-3 mb-4">
            <FaBook className={`text-4xl ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
            <h1 className={`text-5xl md:text-6xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Plant Care Library
            </h1>
          </div>
          
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Your complete guide to nurturing thriving indoor gardens. Explore expert tips, proven techniques, and everything you need to know.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              darkMode ? 'bg-gray-700 text-green-400' : 'bg-white text-green-600 shadow-md'
            }`}>
              <FaLightbulb />
              <span className="font-medium">Expert Tips</span>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              darkMode ? 'bg-gray-700 text-green-400' : 'bg-white text-green-600 shadow-md'
            }`}>
              <FaHeart />
              <span className="font-medium">Proven Methods</span>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              darkMode ? 'bg-gray-700 text-green-400' : 'bg-white text-green-600 shadow-md'
            }`}>
              <FaSeedling />
              <span className="font-medium">Beginner Friendly</span>
            </div>
          </div>
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learnTopics.map((topic, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer ${
                hoveredCard === idx ? 'scale-105 z-10' : 'scale-100'
              } ${
                darkMode 
                  ? 'bg-gray-800 shadow-xl shadow-gray-900/50' 
                  : 'bg-white shadow-lg hover:shadow-2xl'
              }`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                darkMode ? topic.darkColor : topic.color
              } opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icon Circle */}
              <div className="relative p-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${
                  darkMode ? topic.darkColor : topic.color
                } flex items-center justify-center text-white text-2xl mb-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                  {topic.icon}
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {topic.title}
                </h3>

                {/* Description */}
                <p className={`text-sm mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {topic.description}
                </p>

                {/* Expand Button */}
                <button
                  onClick={() => toggleCard(idx)}
                  className={`flex items-center cursor-target gap-2 text-sm font-semibold transition-colors duration-300 ${
                    darkMode 
                      ? 'text-green-400 hover:text-green-300' 
                      : 'text-green-600 hover:text-green-700'
                  }`}
                >
                  <span>{expandedCard === idx ? 'Show Less' : 'Quick Tips'}</span>
                  <FaChevronRight className={`transform transition-transform duration-300 ${
                    expandedCard === idx ? 'rotate-90' : ''
                  }`} />
                </button>

                {/* Expandable Tips */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  expandedCard === idx ? 'max-h-96 mt-4' : 'max-h-0'
                }`}>
                  <div className={`pt-4 border-t space-y-2 ${
                    darkMode ? 'border-gray-700' : 'border-gray-200'
                  }`}>
                    {topic.tips.map((tip, tipIdx) => (
                      <div
                        key={tipIdx}
                        className={`flex items-start gap-2 text-sm ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 bg-gradient-to-br ${
                          darkMode ? topic.darkColor : topic.color
                        }`} />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${
                darkMode ? topic.darkColor : topic.color
              } opacity-5 group-hover:opacity-20 transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center p-8 rounded-3xl ${
          darkMode 
            ? 'bg-gradient-to-r from-gray-800 to-gray-700' 
            : 'bg-gradient-to-r from-green-100 to-emerald-100'
        }`}>
          <h2 className={`text-3xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Ready to Become a Plant Parent Pro?
          </h2>
          <p className={`text-lg mb-6 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Start applying these expert tips today and watch your indoor garden flourish!
          </p>
          <button className={`px-8 py-4 rounded-full cursor-target font-bold text-white bg-gradient-to-r ${
            darkMode 
              ? 'from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500' 
              : 'from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700'
          } transform hover:scale-105 transition-all duration-300 shadow-lg`}>
            Explore Full Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learn;
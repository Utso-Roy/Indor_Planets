import React from "react";
import {
  Truck,
  Clock,
  Leaf,
  Bike,
  Zap,
  Building,
  Package,
  Shield,
  MapPin,
  CheckCircle,
} from "lucide-react";
import GradientText from "../GradientText/GradientText";

const Delivery = () => {
  const deliveryFeatures = [
    {
      icon: <Truck className="text-green-700" size={20} />,
      text: "Free delivery on orders over ৳500",
    },
    {
      icon: <Clock className="text-green-700" size={20} />,
      text: "Same-day delivery in Dhaka",
    },
    {
      icon: <Leaf className="text-green-700" size={20} />,
      text: "100% Eco-Friendly Packaging",
    },
    {
      icon: <Package className="text-green-700" size={20} />,
      text: "Real-Time Order Tracking",
    },
    {
      icon: <Shield className="text-green-700" size={20} />,
      text: "Plant Safety Guarantee",
    },
    {
      icon: <MapPin className="text-green-700" size={20} />,
      text: "Delivery Across Bangladesh",
    },
  ];

  const deliveryPartners = [
    {
      icon: <Bike size={24} />,
      name: "Pathao Express",
      description: "Fast & Reliable",
    },
    {
      icon: <Zap size={24} />,
      name: "Sundarban Courier",
      description: "Nationwide Coverage",
    },
    {
      icon: <Building size={24} />,
      name: "SA Paribahan",
      description: "Safe Transportation",
    },
    {
      icon: <Truck size={24} />,
      name: "Green Ghor Express",
      description: "Plant Specialist",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-16 px-4 md:px-16 overflow-hidden">
      <div className="text-center mb-12">
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
        <p className="text-green-500 text-lg max-w-2xl mx-auto">
          We deliver your beloved plants safely and quickly to your home.
        </p>
      </div>


      <div className="relative mb-16 overflow-hidden bg-white rounded-2xl shadow-lg p-6">
        <div className="flex animate-scroll">
          {deliveryFeatures.map((feature, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center cursor-pointer gap-3 min-w-max mx-8 text-gray-800 font-medium"
            >
              {feature.icon}
              <span className="whitespace-nowrap text-green-700">{feature.text}</span>
            </div>
          ))}
          {deliveryFeatures.map((feature, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center gap-3 min-w-max mx-8 text-gray-800 font-medium"
            >
              {feature.icon}
              <span className="whitespace-nowrap">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="text-green-600" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-green-700 mb-2">1-2 Days</h3>
          <p className="text-green-500">Delivery within Dhaka</p>
        </div>

        <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="text-blue-600" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-green-700 mb-2">
            64 Districts
          </h3>
          <p className="text-green-500">Service Across Bangladesh</p>
        </div>

        <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="text-purple-600" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-green-700 mb-2">98%</h3>
          <p className="text-green-500">Successful Delivery Rate</p>
        </div>
      </div>

      {/* Delivery Partners */}
      <div className="text-center">
        <h2 className="text-center  text-[2rem] my-3">
          <GradientText
            colors={["#4ade80", "#bef264", "#4ade80"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            Our Delivery Partners
          </GradientText>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliveryPartners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-green-600 group-hover:text-green-700 transition-colors mb-4 flex justify-center">
                {partner.icon}
              </div>
              <h4 className="font-semibold text-green-700 mb-2 text-lg">
                {partner.name}
              </h4>
              <p className="text-green-500 text-sm">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Special Delivery Notice */}
      <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Special Plant-Care Delivery
          </h3>
          <p className="text-xl mb-6">
            Our trained delivery team handles your plants with special care
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Shield size={20} />
              Secure Packaging
            </div>
            <div className="flex items-center gap-2">
              <Leaf size={20} />
              Temperature Control
            </div>
            <div className="flex items-center gap-2">
              <Package size={20} />
              Care Instructions Included
            </div>
          </div>
        </div>
      </div>

      <style jsx >{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Delivery;

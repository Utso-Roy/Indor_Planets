import React from "react";
import GradientText from "../Components/GradientText/GradientText";

const InstagramFeedSection = () => {
  const images = [
    "https://i.ibb.co/T5q2p45/indor-1-2.jpg",
    "https://i.ibb.co/fK96NHh/indor-planets-111.jpg",
    "https://i.ibb.co/4w7p4Jjw/indor-17.jpg",
    "https://i.ibb.co/zVnp2n68/indor-6.jpg",
    "https://i.ibb.co/Xx2DKSCH/indo-12.jpg",
      "https://i.ibb.co/ZQ2XZVp/indor-8.jpg",
    "https://i.ibb.co/s9Mn06LM/indor-13.jpg"
  ];

  return (
    <section className="bg-green-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <GradientText
            colors={['#4ade80', '#bef264', '#4ade80']}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center  mb-12">
          Follow Us On Instagram
        </h2>
          </GradientText>

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {images.map((img, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-target cursor-pointer 
              ${index === 0 ? "col-span-2 md:col-span-2" : ""}`}
            >
              <img
                src={img}
                alt={`Instagram post ${index + 1}`}
                className={`w-full object-cover transform hover:scale-110 transition-transform duration-500 
                ${index === 0 ? "h-56 md:h-72 lg:h-80" : "h-48 md:h-56 lg:h-64"}`}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-green-600 text-white cursor-target cursor-pointer hover:bg-green-700 px-6 rounded-full shadow-md"
          >
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeedSection;

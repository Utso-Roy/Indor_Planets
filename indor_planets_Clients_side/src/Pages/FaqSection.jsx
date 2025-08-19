import React from "react";
import GradientText from "../Components/GradientText/GradientText";

const FaqSection = () => {
  const faqs = [
    {
      question: "How often should I water my indoor plants?",
      answer:
        "Most indoor plants prefer to be watered once a week. However, it depends on the plant type and your home’s humidity.",
    },
    {
      question: "Which plants are best for beginners?",
      answer:
        "Snake Plant, Pothos, and ZZ Plant are low-maintenance and perfect for beginners.",
    },
    {
      question: "Do indoor plants need sunlight?",
      answer:
        "Yes, most indoor plants need indirect sunlight. Low-light plants can thrive with minimal sunlight.",
    },
    {
      question: "Do you provide delivery service?",
      answer:
        "Yes! We provide fast and safe home delivery with eco-friendly packaging.",
    },
  ];

  return (
    <section className="bg-green-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <GradientText
            colors={['#4ade80', '#bef264', '#4ade80']}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
           <h2 className="text-3xl md:text-4xl font-bold text-center  mb-10">
          Frequently Asked Questions
        </h2>

          </GradientText>
        {/* FAQ using DaisyUI Collapse */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-arrow border border-green-200 bg-white shadow-md rounded-xl cursor-target cursor-pointer"
            >
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium text-green-700">
                {faq.question}
              </div>
              <div className="collapse-content text-gray-600">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

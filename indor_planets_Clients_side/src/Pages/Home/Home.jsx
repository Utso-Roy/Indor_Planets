import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import plantImg from "../../assets/Home section.png";
import { useNavigate } from "react-router";
import Section1 from "../../Components/section1/Section1";
import GradientText from "../../Components/GradientText/GradientText";
import Section2 from "../../Components/Section2/Section2";
import ReviewSection from "../../Components/Review/ReviewSection";
import Section3 from "../../Components/Section/Section3";
import CareGuides from "../../Components/CareGuides/CareGuides";
import Delivery from "../../Components/Delivery/Delivery";
const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="">
      <div className="min-h-screen bg-gradient-to-r from-green-100 via-lime-100 to-green-100 flex items-center justify-center px-6 py-1">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <p className="text-sm uppercase tracking-widest text-green-600">
              Fresh • Natural • Green Living
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              Bring Nature Inside Your Home
            </h1>
            <p className="text-lg md:text-xl text-green-800 mb-6">
              Discover our exclusive collection of air-purifying indoor plants
              to refresh your space.
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-green-700 cursor-target hover:bg-green-800 cursor-pointer text-white px-6 py-3 rounded shadow-md transition-all duration-300"
            >
              Shop Now
            </button>
          </div>

          {/* Image Section */}
          <div
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="flex justify-center"
          >
            <img
              src={plantImg}
              alt="Indoor Plant"
              className="max-w-[300px] md:max-w-[400px] w-full h-auto drop-shadow-lg"
            />
          </div>
        </div>
      </div>
      <section>
        <h2 className="text-center  text-[2rem] my-3">
          <GradientText
            colors={["#4ade80", "#bef264", "#4ade80"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            New Arrival Plants
          </GradientText>
        </h2>
        <div>
          <Section2></Section2>
        </div>
      </section>
      <section>
        <h2 className="text-center  text-[2rem] my-3">
          <GradientText
            colors={["#4ade80", "#bef264", "#4ade80"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
           Best Selling Plants
          </GradientText>
        </h2>
        <div>
          <Section3></Section3>
        </div>
      </section>
      <section>
        <h2 className="text-center  text-[2rem] my-3">
          <GradientText
            colors={["#4ade80", "#bef264", "#4ade80"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            Plants Category
          </GradientText>
        </h2>
        <div  className="bg-green-600 cursor-target">
           <Section1></Section1>
       </div>
      </section>

      <section>
        <CareGuides></CareGuides>
      </section>

      <section>
        <Delivery></Delivery>
      </section>
      <section className="my-5">
      
        <ReviewSection></ReviewSection>
      </section>
    </main>
  );
};

export default Home;

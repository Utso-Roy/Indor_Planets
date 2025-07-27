import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import plantImg from '../../assets/Home section.png';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
      <main>
          
          <div className="min-h-screen bg-gradient-to-r from-green-100 via-lime-100 to-green-100 flex items-center justify-center px-6 py-1">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000">
                    <p className="text-sm uppercase tracking-widest text-green-600">
            Fresh • Natural • Green Living
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Bring Nature Inside Your Home 
          </h1>
          <p className="text-lg md:text-xl text-green-800 mb-6">
            Discover our exclusive collection of air-purifying indoor plants to refresh your space.
          </p>
          <button  className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded shadow-md transition-all duration-300">
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
          
          

    </main>
  );
};

export default Home;

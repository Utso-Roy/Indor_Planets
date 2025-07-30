import React, { useEffect, useState } from 'react';
import SpotlightCard from '../../SpotlightCard/SpotlightCard';
import Loading from '../../Loading/Loading';

const Fertilizer = () => {
    const [fertilizers, setFertilizers] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/allFertilizer')
      .then(res => res.json())
      .then(data => {
        setFertilizers(data); // assuming data is array
      });
  }, []);

  if (fertilizers.length === 0) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {fertilizers.map((fertilizer) => (
        <SpotlightCard
          key={fertilizer._id}
          className="custom-spotlight-card shadow-lg rounded-xl overflow-hidden"
          spotlightColor="rgb(247, 254, 231)

"
        >
          <img
            src={fertilizer?.image}
            alt={fertilizer?.name}
            className="w-full rounded-xl h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="font-bold text-green-500 mb-2">{fertilizer?.name}</h2>
            <div className="text-green-500 font-bold mb-3">
              Price: ৳{fertilizer?.price}
            </div>
                  <div className='flex gap-1 '>
                      
                      
            <button className="bg-green-500 hover:bg-green-600 cursor-target text-white px-3 py-1 text-sm rounded">
              Buy Now
            </button>
                      
            <button className="bg-green-500 hover:bg-green-600 cursor-target text-white px-3 py-1 text-sm rounded">
             Details
            </button>
</div>
          </div>
        </SpotlightCard>
      ))}
    </div>
  );
};

export default Fertilizer;

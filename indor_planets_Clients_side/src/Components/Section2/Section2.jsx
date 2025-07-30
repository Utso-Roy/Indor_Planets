// import React, { useEffect, useState } from 'react';
// import SpotlightCard from '../../SpotlightCard/SpotlightCard';
// import axiosInstance from '../../Utils/axiosInstance';

// const Section2 = () => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axiosInstance
//       .get('/allFertilizer')
//       .then((res) => {
//         setData(res.data.result); 
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         setError(err);
//         setIsLoading(false);
//       });
//   }, []);

//   if (isLoading) return <p className="text-center">Loading...</p>;
//   if (error) return <p className="text-red-500 text-center">Error fetching data</p>;

//   return (
//     <div className="grid md:grid-cols-3 gap-4">
//       {data.map((item) => (
//         <SpotlightCard
//           key={item._id}
//           className="custom-spotlight-card"
//           spotlightColor="rgba(0, 229, 255, 0.2)"
//         >
//           <div className="p-4">
//             <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
//             <p className="text-gray-700">{item.description}</p>
//           </div>
//         </SpotlightCard>
//       ))}
//     </div>
//   );
// };

// export default Section2;

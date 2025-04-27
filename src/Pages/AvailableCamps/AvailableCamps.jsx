// import { useEffect, useState } from "react";
// import { Helmet } from "react-helmet-async";
// import CampCard from "../Shared/CampCard/CampCard";

// const AvailableCamps = () => {
//   const [camps, setCamps] = useState([]);

//   useEffect(() => {
//     fetch('medicalCamps.json')
//       .then(res => res.json())
//       .then(data => {
//         setCamps(data);
//       });

//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="pt-20">
//       <Helmet>
//         <title>Medicare | Available Camps</title>
//       </Helmet>
//         {/* Top Search Section (Only design) */}
//         <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-xl py-5 my-5 mx-3">
//           <div className="mx-auto md:w-1/2 px-3 py-10">
//             <div className="relative">
//               <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                 <svg
//                   className="w-4 h-4 text-gray-500"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                   />
//                 </svg>
//               </div>
//               {/* Dummy Input (search button) */}
//               <input
//                 type="search"
//                 className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Search Camps..."
//                 disabled
//               />
//               <button
//                 type="submit"
//                 className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
//                 disabled
//               >
//                 Search
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Camps Grid */}
//         <div className="px-5 py-8 mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {
//               camps.length > 0 ? (
//                 camps.map(camp => (
//                   <CampCard key={camp.id} camp={camp} />
//                 ))
//               ) : (
//                 <p className="text-center col-span-3 text-gray-500">No Camps Found</p>
//               )
//             }
//           </div>
//         </div>
//     </div>
//   );
// };

// export default AvailableCamps;




import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import CampCard from "../Shared/CampCard/CampCard";

const AvailableCamps = () => {
  const [camps, setCamps] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/camp')
      .then(res => res.json())
      .then(data => {
        setCamps(data);
      });

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <Helmet>
        <title>Medicare | Available Camps</title>
      </Helmet>
      {/* Top Search Section (Only design) */}
      <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-xl py-5 my-5 mx-3">
        <div className="mx-auto md:w-1/2 px-3 py-10">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            {/* Dummy Input (search button) */}
            <input
              type="search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Camps..."
              disabled
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              disabled
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Camps Grid */}
      <div className="px-5 py-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {camps.length > 0 ? (
            camps.map((camp) => (
              <CampCard key={camp.id} camp={camp} isPopularCamp={false} />
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">No Camps Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AvailableCamps;


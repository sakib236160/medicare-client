// import { Link } from "react-router-dom";
// // import CampCard from "../Shared/CampCard";
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import CampCard from "../../Shared/CampCard/CampCard";
// import { useEffect, useState } from "react";

// const [camp,setCamp] = useState();
// useEffect(()=>{
//     fetch('medicalCamps.json')
//     .then(rse=>res.json())
//     .then(data=> setCamp(data))
// },[])

// const PopularCamps = () => {
//   return (
//     <section className="text-gray-600 body-font py-5">
//       <SectionTitle
//         heading={"Popular Camps"}
//         subHeading={"Explore Events Aimed at Community Wellness"}
//       />
//       <div className="py-8 mx-auto">
//         {/* Sort Dropdown */}
//         <div className="flex justify-end items-center gap-2 pb-2">
//           <select
//             name="sort"
//             id="sort"
//             className="border border-primary/20 text-sm px-2.5 py-1 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
//           >
//             <option value="">Sort By</option>
//             <option value="asc">Participant Count</option>
//           </select>
//         </div>

//         {/* Camps Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Dummy Camp Cards */}
//           {
            
//           }
//           <CampCard />
//           <CampCard />
//           <CampCard />
//           <CampCard />
//           <CampCard />
//           <CampCard />
//         </div>
//       </div>

//       {/* See All Camps Button */}
//       <div className="flex justify-center items-center py-5">
//         <Link
//           to="/available-camps"
//           className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary/95 focus:outline-none focus:ring-0 active:bg-primary/90"
//         >
//           See All Camps
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default PopularCamps;



import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CampCard from "../../Shared/CampCard/CampCard";
import { useEffect, useState } from "react";

const PopularCamps = () => {
  const [camps, setCamps] = useState([]);

  useEffect(() => {
    fetch('medicalCamps.json')
      .then(res => res.json())
      .then(data => {
        // Highest participant count অনুযায়ী sort করে, প্রথম ৬ টা নিবো
        const sortedCamps = data.sort((a, b) => b.participantCount - a.participantCount).slice(0, 6);
        setCamps(sortedCamps);
      });
  }, []);

  return (
    <section className="text-gray-600 body-font py-5">
      <SectionTitle
        heading={"Popular Camps"}
        subHeading={"Explore Events Aimed at Community Wellness"}
      />

      <div className="py-8 mx-auto">
        {/* Sort Dropdown */}
        <div className="flex justify-end items-center gap-2 pb-2">
          <select
            name="sort"
            id="sort"
            className="border border-primary/20 text-sm px-2.5 py-1 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
          >
            <option value="">Sort By</option>
            <option value="asc">Participant Count</option>
          </select>
        </div>

        {/* Camps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            camps.map(camp => (
              <CampCard key={camp.id} camp={camp} />
            ))
          }
        </div>
      </div>

      {/* See All Camps Button */}
      <div className="flex justify-center items-center py-5">
        <Link
          to="/available-camps"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary/95 focus:outline-none focus:ring-0 active:bg-primary/90"
        >
          See All Camps
        </Link>
      </div>
    </section>
  );
};

export default PopularCamps;

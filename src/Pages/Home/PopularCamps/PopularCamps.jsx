import { useEffect, useState } from "react";
import CampCard from "../../Shared/CampCard/CampCard";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularCamps = () => {
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
      <SectionTitle
        heading={"Popular Camps"}
        subHeading={"Explore Events Aimed at Community Wellness"}
      />

      {/* Camps Grid */}
      <div className="px-5 py-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {camps.length > 0 ? (
            camps.slice(0, 6).map((camp) => (
              <CampCard key={camp.id} camp={camp} isPopularCamp={true} />
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">No Popular Camps Found</p>
          )}
        </div>
      </div>

      {/* See All Camps Button */}
      <div className="flex justify-center items-center py-1">
        <Link
          to="/available-camps"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary/95 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary/90 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary/90"
        >
          See All Camps
        </Link>
      </div>
    </div>
  );
};

export default PopularCamps;

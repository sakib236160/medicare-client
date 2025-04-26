// const CampCard = ({ camp }) => {
//     const { campName, image, fees, dateTime, location, healthcareProfessional, participantCount } = camp;
  
//     return (
//       <div className="border border-primary/20 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white">
//         <img src={image} alt={campName} className="w-full h-48 object-cover" />
  
//         <div className="p-4 space-y-2">
//           <h2 className="text-xl font-semibold text-primary">{campName}</h2>
  
//           <div className="text-sm text-gray-600">
//             <p><span className="font-medium">Fees:</span> ${fees}</p>
//             <p><span className="font-medium">Date & Time:</span> {dateTime}</p>
//             <p><span className="font-medium">Location:</span> {location}</p>
//             <p><span className="font-medium">Healthcare Professional:</span> {healthcareProfessional}</p>
//             <p><span className="font-medium">Participants:</span> {participantCount}</p>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default CampCard;


import { MapPin, CalendarDays, Users, DollarSign, User } from "lucide-react";
// import { Badge } from "@/components/ui/badge"; 
// import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";

const CampCard = ({ camp }) => {
  const { _id, campName, image, fees, dateTime, location, healthcareProfessional, participantCount, targetAudience, services, description } = camp;

  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white flex flex-col">
      {/* Image */}
      <img src={image} alt={campName} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-grow">

        {/* Location */}
        <div className="flex items-center text-gray-500 text-sm gap-1">
          <MapPin className="w-4 h-4" />
          {location}
        </div>
        {/* healthcareProfessional */}
        <div className="flex items-center text-gray-500 text-sm gap-1">
  <User className="w-4 h-4" />
  {healthcareProfessional}
</div>

        {/* Camp Name */}
        <h2 className="text-lg font-semibold text-primary">{campName}</h2>

        {/* Short Description */}
        <p className="text-gray-600 text-sm line-clamp-3">
          {description?.slice(0, 120)}...
        </p>

        {/* Services Badge */}
        <div className="flex flex-wrap gap-2 mt-2">
          {services?.map((service, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs">
              {service}
            </Badge>
          ))}
        </div>

        {/* Target Audience */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
          <User className="w-4 h-4" />
          {targetAudience}
        </div>

        {/* Bottom Details */}
        <div className="flex justify-between text-gray-600 text-sm mt-4">
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            {fees ? `${fees}` : "Free"}
          </div>

          <div className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4" />
            {dateTime}
          </div>

          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {participantCount}
          </div>
        </div>

        {/* See Details Button */}
        <Link to={`/camp-details/${_id}`} className="mt-4 text-center">
          <Button variant="link" className="text-primary">
            See Details →
          </Button>
        </Link>

      </div>
    </div>
  );
};

export default CampCard;

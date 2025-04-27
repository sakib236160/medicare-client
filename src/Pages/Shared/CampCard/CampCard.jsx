import { MapPin, CalendarDays, Users, DollarSign, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";

const CampCard = ({ camp, isPopularCamp }) => {
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

        {/* Buttons */}
        <div className="mt-4 text-center">
          {/* Show both buttons if it's an Available Camp */}
          {isPopularCamp ? (
            // Only show the "See Details" button for Popular Camps
            <Link to={`/camp-details/${_id}`}>
              <Button variant="link" className="text-primary">
                See Details →
              </Button>
            </Link>
          ) : (
            // Show both buttons for Available Camps
            <div className="flex gap-4 justify-center">
              <Link to={`/camp-details/${_id}`}>
                <Button variant="link" className="text-primary">
                  See Details →
                </Button>
              </Link>
              <Button variant="solid" className="bg-blue-600 text-white">
                Join Camp
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CampCard;

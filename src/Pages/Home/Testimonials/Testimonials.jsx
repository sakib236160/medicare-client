import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const response = await fetch("/reviews.json");
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Failed to load reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // date format korar function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return dateString; // invalid hole original text dekhabe
    const month = date.getMonth() + 1; // 0 index
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`; // MM/DD/YYYY
  };

  if (loading) {
    return <div className="text-center py-10 font-bold text-indigo-500">Loading...</div>;
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto">
        <SectionTitle 
          heading={"Testimonials"}
          subHeading={"What Our Participants Say"}
        />
        <div className="flex flex-wrap mt-4 py-5">
          {reviews.slice(0, 2).map((review, index) => (
            <div key={index} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    alt={review.participant_name}
                    src={review.participant_image}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h2 className="text-gray-900 font-medium title-font">
                      {review.participant_name}
                    </h2>
                    {/* ekhane formatted date use kora */}
                    <p className="text-gray-500 text-sm">{formatDate(review.date)}</p>
                  </div>
                </div>
                <p className="leading-relaxed mb-6">{review.feedback}</p>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-2 text-xl">
                    {"★".repeat(Math.floor(review.rating))}
                    {"☆".repeat(5 - Math.floor(review.rating))}
                  </span>
                  <span className="text-gray-600 ml-2">{review.rating} / 5</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

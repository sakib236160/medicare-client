import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import NewsLetter from "../NewsLetter/NewsLetter";
import PopularCamps from "../PopularCamps/PopularCamps";
import Testimonials from "../Testimonials/Testimonials";



const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Banner></Banner>
            <PopularCamps></PopularCamps>
            <Testimonials></Testimonials>
            <Faq></Faq>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;
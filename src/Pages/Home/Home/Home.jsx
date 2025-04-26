import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import NewsLetter from "../NewsLetter/NewsLetter";
import PopularCamps from "../PopularCamps/PopularCamps";


const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Banner></Banner>
            <PopularCamps></PopularCamps>
            <Faq></Faq>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;
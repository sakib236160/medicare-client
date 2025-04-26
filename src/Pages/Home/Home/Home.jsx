import Banner from "../Banner/Banner";
import PopularCamps from "../PopularCamps/PopularCamps";


const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Banner></Banner>
            <PopularCamps></PopularCamps>
        </div>
    );
};

export default Home;
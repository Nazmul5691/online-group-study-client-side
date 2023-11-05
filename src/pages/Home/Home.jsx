import Banner from "./Banner";
import Features from "./Features";




const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="my-20 max-w-6xl mx-auto">
                <Features></Features>
            </div>
        </div>
    );
};

export default Home;
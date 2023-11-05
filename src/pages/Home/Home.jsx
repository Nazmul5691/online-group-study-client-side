import Banner from "./Banner";
import Faq from "./Faq";
import Features from "./Features";
import ReviewSection from "./ReviewSection";




const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="my-16 max-w-6xl mx-auto">
                <Features></Features>
            </div>
            <div className="my-16 max-w-6xl mx-auto">
                <Faq></Faq>
            </div>
            <div className="my-16 max-w-6xl mx-auto">
                <ReviewSection></ReviewSection>
            </div>
        </div>
    );
};

export default Home;
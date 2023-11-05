import { useEffect, useState } from "react";
import FeaturesCard from "./FeaturesCard";


const Features = () => {

    const [features, setFeatures] = useState([])

    useEffect( () =>{
        fetch('features.json')
        .then(res => res.json())
        .then(data => setFeatures(data))
    },[])

    return (
        <div>
            <div className="text-center my-8">
                <h3 className="text-2xl mb-2 font-semibold text-[#113dff]">Features</h3>
                <h2 className="text-4xl mb-3 font-bold">Explore Our Features</h2>
                <p>Discover the amazing features that make our study group platform stand out. <br /> We provide everything you need for a successful learning journey.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-20 mt-10">
                {
                    features.map(feature => <FeaturesCard key={feature.featureId} feature={feature}></FeaturesCard>)
                }
            </div>

        </div>
    );
};

export default Features;
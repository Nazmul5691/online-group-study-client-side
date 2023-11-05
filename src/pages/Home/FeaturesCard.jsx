/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const FeaturesCard = ({feature}) => {

    const { featureId, featureImage, featureTitle, featureDescription } = feature;

    return (
        <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={featureImage}
          alt=""
          className="rounded-xl w-full h-[250px]"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title font-bold">{featureTitle}</h2>
        <p className="font-semibold text-[#616060]">{featureDescription}</p>
        <div>
             <button className="btn btn-primary">Read More</button>
        </div>
        
      </div>
    </div>
    );
};

export default FeaturesCard;
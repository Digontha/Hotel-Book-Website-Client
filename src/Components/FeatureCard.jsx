

const FeatureCard = ({ feature }) => {
    console.log(feature);
    const {image,title,description} = feature||{};
    return (
        <div className="card bg-neutral text-neutral-content">
            <div className="card-body ">
                <img className="h-60" src={image} alt="" />
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline text-white">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;
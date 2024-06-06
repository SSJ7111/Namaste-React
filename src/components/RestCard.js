import { CDN_URL } from "../utils/constants";

const RestCard = (props) => {
  const { restData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    restData?.info;

  return (
    <div className="rest-cards">
      <div className="card">
        <div className="card-image">
          <img
            className="card-img"
            alt="rest-logo"
            src={CDN_URL + cloudinaryImageId}
          />
        </div>
        <div className="card-content">
          <h3 className="card-title">{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h5>{avgRating} stars</h5>
          <h5>{costForTwo}</h5>
          <h5>{sla?.slaString}</h5>
        </div>
      </div>
    </div>
  );
};

export default RestCard;

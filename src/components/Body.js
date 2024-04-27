import RestCard from "./RestCard";
import restList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRest, setListOfRest] = useState(restList);

  return (
    <div className="body">
      <div className="filter-container">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listOfRest.filter((rest) => rest.info.avgRating >= 4.5);
            setListOfRest(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {listOfRest.map((restaurant) => (
          <RestCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

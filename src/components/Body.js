import RestaurantCard from "./RestaurantCard";
import { res_data } from "../utils/mockdata";
import { useState } from "react";

const BodyComponent = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(res_data);
  return (
    <div>
      <div>
        <button
          className="filter-btn"
          onClick={() => {
            setlistOfRestaurants(
              res_data.filter((restaurant) => restaurant.info.avgRating > 4.2)
            );
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-card-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resinfo={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;

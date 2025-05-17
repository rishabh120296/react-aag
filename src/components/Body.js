import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import ShimerComponent from "./Shimer";
import { useEffect, useState } from "react";
import { Link } from "react-router";
const BodyComponent = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    //console.log("FETCH");
    fetch_data();
  }, []);

  const fetch_data = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4302094&lng=78.51078009999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    let data = await response.json();

    console.log(data);

    data = data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setlistOfRestaurants(data);
    setFilteredRestaurant(data);
  };

  if (!onlineStatus) {
    return <h1>Hi, You are offline!!☹️ Please check your internet🛜</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <ShimerComponent></ShimerComponent>
  ) : (
    <div>
      <div className="filter m-1">
        <button
          className="m-2 cursor-pointer bg-green-300 p-2 rounded-xl"
          onClick={(event) => {
            console.log(event);
            setlistOfRestaurants(
              listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4.2
              )
            );
          }}
        >
          Top Rated Restaurants
        </button>
        <input
          className="m-2 border-black border-2 border-solid"
          onChange={(e) => {
            console.log(e);
            setSearchTerm(e.target.value);
          }}
        ></input>
        <button
          className="m-2 cursor-pointer bg-green-300 p-2 rounded-xl"
          onClick={() => {
            console.log(searchTerm);

            setFilteredRestaurant(
              searchTerm === ""
                ? listOfRestaurants
                : listOfRestaurants.filter((restaurant) =>
                    restaurant.info.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  )
            );
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-8 mx-4">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resinfo={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;

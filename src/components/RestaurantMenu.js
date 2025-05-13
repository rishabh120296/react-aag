import { useEffect, useState } from "react";
import ShimerComponent from "./Shimer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();

  fetchMenu = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=" +
        resId
    );
    let data = await response.json();

    data =
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;
    console.log(data);

    setMenuItems(data);
  };

  if (!menuItems?.length) {
    return <ShimerComponent />;
  }

  return (
    <div>
      {/* <div>{name}</div>
      <div>{ratings.rating}</div>
      <div>{defaultPrice}</div>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit" +
          imageId
        }
      ></img> */}
      <div className="dish-container">
        {menuItems.map((item) => (
          <div key={item.card.info.id}>
            {item.card.info.name} - Rs.{item.card.info.defaultPrice / 100}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

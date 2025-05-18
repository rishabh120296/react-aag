import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfoData, setResInfo] = useState([]);
  //const [menuItemsData, setMenuItemData] = useState([]);
  const [dishCategory, setDishCategory] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(MENU_URL + resId);

    const data = await response.json();
    const resInfo = data?.data?.cards[2]?.card?.card?.info;
    //const menuItems =
    //data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    //
    const allCards =
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const dishCategory = allCards.filter((card) => {
      //console.log(card);
      //console.log(card?.card.card["@type"]);
      return (
        card?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
    setResInfo(resInfo);
    //setMenuItemData(menuItems);
    setDishCategory(dishCategory);
  };

  return [resInfoData, dishCategory];
};

export default useRestaurantMenu;

import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfoData, setResInfo] = useState([]);
  const [menuItemsData, setMenuItemData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(MENU_URL + resId);

    const data = await response.json();
    const resInfo = data?.data?.cards[2]?.card?.card?.info;
    const menuItems =
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;
    setResInfo(resInfo);
    setMenuItemData(menuItems);
  };

  return [resInfoData, menuItemsData];
};

export default useRestaurantMenu;

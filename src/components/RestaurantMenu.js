import { useEffect, useState } from "react";
import ShimerComponent from "./Shimer";
import { useParams } from "react-router";
import ResMenuItemCard from "./ResMenuitemCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfoData, menuItems] = useRestaurantMenu(resId);

  if (!menuItems?.length) {
    return <ShimerComponent />;
  }

  return (
    <div>
      <div>
        <div className="res-name">{resInfoData.name}</div>
        <div className="res-des">
          <div>{resInfoData.avgRating}</div>
          <div>{resInfoData.cuisines}</div>
          <div>{resInfoData.sla.deliveryTime}</div>
        </div>
      </div>
      <div>
        {menuItems.map((item) => (
          <ResMenuItemCard key={item.card.info.id} dishInfo={item.card.info} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

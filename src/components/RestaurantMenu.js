import { useEffect, useState } from "react";
import ShimerComponent from "./Shimer";
import { useParams } from "react-router";
import DishItemCard from "./DishitemCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import DishCategory from "./DishCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfoData, dishCategory] = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  const [showItems, setShowItems] = useState(true);
  if (!dishCategory?.length) {
    return <ShimerComponent />;
  }

  return (
    <div>
      <div>
        <div className="font-bold text-center text-2xl">{resInfoData.name}</div>
        <div className="font-bold text-center text-lg">
          <div>{resInfoData.avgRating}</div>
          <div>{resInfoData.cuisines.join(" ,")}</div>
          <div>{resInfoData.sla.deliveryTime}</div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        {dishCategory.map((category, index) => (
          <div key={category?.card?.card?.categoryId} className="w-1/2">
            <DishCategory
              dishCategory={category?.card?.card}
              onSetShowItems={() =>
                setShowItems(index === showIndex ? !showItems : true)
              }
              onSetShowIndex={() => setShowIndex(index)}
            />

            {category?.card?.card?.itemCards?.map((item) => (
              <DishItemCard
                key={item.card?.info?.id}
                dishInfo={item?.card?.info}
                showItems={index === showIndex && showItems}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

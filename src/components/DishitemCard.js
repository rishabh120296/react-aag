import { CDN_DISH_URL } from "../utils/constants";

const DishItemCard = (props) => {
  const { imageId, name, price, description, ratings } = props?.dishInfo;
  if (props.showItems) {
    return (
      <div className="dish-container bg-slate-100 p-6 flex gap-4">
        <div className="flex flex-col gap-1">
          <div className="dish-name">{name}</div>
          <div>{price}</div>
          <div>{ratings.aggregatedRating.rating}</div>
          <div>{description}</div>
        </div>
        <img className="w-32" src={CDN_DISH_URL + imageId}></img>
      </div>
    );
  }
};

export default DishItemCard;

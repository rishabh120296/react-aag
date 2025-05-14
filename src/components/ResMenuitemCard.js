import { CDN_DISH_URL } from "../utils/constants";
ResMenuItemCard = (props) => {
  const { imageId, name, price, description, ratings } = props?.dishInfo;
  return (
    <div className="dish-container">
      <div>
        <div className="dish-name">{name}</div>
        <div>{price}</div>
        <div>{ratings.aggregatedRating.rating}</div>
        <div>{description}</div>
      </div>
      <img src={CDN_DISH_URL + imageId}></img>
    </div>
  );
};

export default ResMenuItemCard;

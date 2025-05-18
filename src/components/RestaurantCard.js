import { CDN_URL } from "../utils/constants";

const RestaurantCard = (resdata) => {
  const { name, avgRating, sla, cloudinaryImageId, cuisines } = resdata.resinfo;
  return (
    <div className="w-64 h-full p-2 bg-slate-200 cursor-pointer rounded-lg hover:bg-slate-400">
      <img
        className="w-full h-64 rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <div id="name">{name}</div>
      <div id="name">{cuisines.join(", ")}</div>
      <div id="Rating">{"* Rating " + avgRating}</div>
      <div id="time">{sla.deliveryTime + " mins"}</div>
    </div>
  );
};

export const withDiscountBadge = () => {
  return (props) => {
    console.log(props);
    const aggregatedDiscountInfoV3 = props?.resinfo?.aggregatedDiscountInfoV3;
    console.log(aggregatedDiscountInfoV3?.header);
    return (
      <div>
        <div className="bg-black text-white absolute">
          {aggregatedDiscountInfoV3?.header +
            aggregatedDiscountInfoV3?.subHeader}
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

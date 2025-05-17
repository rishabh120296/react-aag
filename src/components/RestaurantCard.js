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

export default RestaurantCard;

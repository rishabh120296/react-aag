import { CDN_URL } from "../utils/constants";


const RestaurantCard = (resdata) => {
  //console.log(resdata.resinfo)
  
  const {name,
        avgRating,
        sla,
        cloudinaryImageId,
        cuisines
  } = resdata.resinfo
  return (
    
    <div className="res-card">
      <img
        className="food-img"
        src={CDN_URL+cloudinaryImageId}
      />
      <div id="name">{name}</div>
      <div id="name">{cuisines.join(', ')}</div>
      <div id="Rating">{'* Rating ' + avgRating}</div>
      <div id="time">{sla.deliveryTime + " mins"}</div>
    </div>
  );
};

export default RestaurantCard
import { useState } from "react";

//const [showItems, setShowItems] = useState(true);
const DishCategory = (props) => {
  const { title } = props?.dishCategory;
  return (
    <div
      className="flex justify-between bg-slate-200  cursor-pointer"
      onClick={() => {
        props.onSetShowIndex();
        props.onSetShowItems();
        // console.log(props.showItems);
        // props.showItems
        //   : props.onSetShowItems(true);
      }}
    >
      <div className="font-bold cursor-pointer">{title}</div>
      <div>🔽</div>
    </div>
  );
};

export default DishCategory;

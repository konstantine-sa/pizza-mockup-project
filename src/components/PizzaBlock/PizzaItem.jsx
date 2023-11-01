import React from "react";
import ButtonOutlinedOrder from "../Buttons/ButtonOutlinedOrder";

function PizzaItem({ imageUrl, types, name, price, sizes }) {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const [itemCount, setItemCount] = React.useState(0);
  const typeNames = ["Dünner", "Traditioneller"];

  return (
    <div className="w-72 mb-16 text-center">
      <img src={imageUrl} alt="Das Foto des" />
      <h4 className="mb-5 text-xl font-extrabold text-[#282828]">{name}</h4>

      {/* item selector */}
      <div className="flex flex-col rounded-xl p-2 pb-0 bg-[#f3f3f3]">
        <ul className="flex justify-evenly mb-2">
          {types.map((type, index) => (
            <li
              key={index}
              onClick={() => setActiveType(type)}
              className={
                activeType === type
                  ? "p-2 w-full bg-white shadow-sm rounded-md cursor-pointer"
                  : "p-2 w-full cursor-pointer"
              }
            >
              {typeNames[type]}
            </li>
          ))}
        </ul>
        <ul className="flex justify-evenly  mb-2 cursor-pointer">
          {sizes.map((size, index) => (
            <li
              key={size}
              onClick={() => setActiveSize(index)}
              className={
                activeSize === index
                  ? "p-2 w-full bg-white shadow-sm rounded-md cursor-pointer"
                  : "p-2 w-full cursor-pointer"
              }
            >
              {[size]} cm
            </li>
          ))}
        </ul>
      </div>

      {/* item bottom */}
      <div className="flex items-center justify-between mt-5">
        <div className="font-black text-xl ">ab {price[activeSize]} €</div>
        <ButtonOutlinedOrder
          itemCount={itemCount}
          setItemCount={setItemCount}
        />
      </div>
    </div>
  );
}

export default PizzaItem;

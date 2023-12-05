import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../../redux/slices/cartSlice";

function CartItem({ id, name, type, price, count, imageUrl, size }) {
  const dispatch = useDispatch();
  const pizzaTypes = ["Dünner", "Traditioneller"];

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
        type,
        size,
      })
    );
  };
  const onClickMinus = () => {
    if (count > 1) {
      dispatch(minusItem({ id, type, size }));
    }
  };
  const onClickRemove = () => {
    dispatch(removeItem({ id, type, size }));
  };

  return (
    <div className="flex w-full pt-4 mt-4 lg:pt-8 lg:mt-7 border-t-[1px] border-t-[#f6f6f6]">
      {/* cart item img */}
      <div className="flex items-center mr-4 w-[15%]">
        <img
          className="w-9 h-9 sm:w-20 sm:h-20"
          src={imageUrl}
          alt="Pizza Foto"
        />
      </div>

      {/* cart item info */}
      <div className="flex flex-col justify-center w-[40%]">
        <h3 className="font-bold md:text-2xl text-[#232323]">{name}</h3>
        <p className="text-sm md:text-lg text-[#8d8d8d]">
          {pizzaTypes[type]}, {size} cm.
        </p>
      </div>

      {/* cart item count */}
      <div className="flex justify-between items-center w-[20%] lg:w-[13%]">
        {/* button Minus */}
        <div
          className="group cursor-pointer flex justify-center items-center bg-white hover:bg-[#fe5f1e] lg:w-8 lg:h-8 p-0
         border-[#fe5f1e]  border-[2px] rounded-full duration-150"
          onClick={onClickMinus}
        >
          <svg
            className="ml-[1px] mr-[1px] mt-[2px] mb-[1px] box-border stroke-[#fe5f1e]  group-hover:stroke-white w-3 h-3 duration-150"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="current"
          >
            <path
              d="M6 12L18 12"
              stroke="current"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <b className="lg:text-[22px] ml-1 mr-1">{count}</b>

        {/* button Plus */}
        <div
          className="group cursor-pointer flex justify-center items-center bg-white hover:bg-[#fe5f1e] lg:w-8 lg:h-8 p-0
         border-[#fe5f1e]  border-[2px] rounded-full duration-150"
          onClick={onClickPlus}
        >
          <svg
            className=" ml-[2px] mt-[2px] fill-[#fe5f1e] group-hover:fill-white w-3 h-3  duration-150"
            width="10"
            height="10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.92001 3.84v4.8c0 .53016-.42984.96-.96.96s-.96-.42984-.96-.96L4 5.76l.00001-1.92V.96c0-.53016.42984-.96.96-.96s.96.42984.96.96v2.88Z"
              fill="current"
            />
            <path
              d="M5.75998 5.92001H.959977c-.53016 0-.95999995-.42984-.95999993-.96 2e-8-.53016.42983993-.96.95999993-.96L3.83998 4l1.92.00001h2.88c.53016 0 .96.42984.96.96s-.42984.96-.96.96h-2.88Z"
              fill="current"
            />
          </svg>
        </div>
      </div>

      {/* cart item price */}
      <div className="flex justify-center items-center w-[20%] lg:w-[33%]">
        <b className="md:text-[22px]">{price * count} €</b>
      </div>

      {/* cart item remove */}
      <div className="flex justify-end items-center w-[8%] lg:w-[4%]">
        <div
          className="group cursor-pointer flex justify-center items-center bg-white hover:bg-black w-5 h-5 lg:w-8 lg:h-8 p-0
         border-gray-400 hover:border-black  border-[2px] rounded-full duration-150"
          onClick={onClickRemove}
        >
          <svg
            className="rotate-45 mt-[3px] fill-gray-400 group-hover:fill-white w-3 h-3 duration-150"
            width="10"
            height="10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.92001 3.84v4.8c0 .53016-.42984.96-.96.96s-.96-.42984-.96-.96L4 5.76l.00001-1.92V.96c0-.53016.42984-.96.96-.96s.96.42984.96.96v2.88Z"
              fill="current"
            />
            <path
              d="M5.75998 5.92001H.959977c-.53016 0-.95999995-.42984-.95999993-.96 2e-8-.53016.42983993-.96.95999993-.96L3.83998 4l1.92.00001h2.88c.53016 0 .96.42984.96.96s-.42984.96-.96.96h-2.88Z"
              fill="current"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

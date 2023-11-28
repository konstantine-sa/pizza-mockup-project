import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ButtonCompleteOrder from "../Buttons/ButtonCompleteOrder";
import ButtonOutlinedBack from "../Buttons/ButtonOutlinedBack";

function CartBottom() {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className=" mt-10 lg:mt-20">
      {/* bottom details */}
      <div className="flex flex-col md:flex-row justify-between">
        <span className="text-lg md:text-2xl text-[#232323]">
          Gesamtanzahl :
          <b className="ml-4 md:ml-2 text-[#232323]"> {totalCount} Stück</b>
        </span>
        <span className="text-lg md:text-2xl text-[#232323]">
          Bestellsumme:
          <b className="ml-4 md:ml-2 text-[#fe5f1e]"> {totalPrice} €</b>
        </span>
      </div>

      {/* bottom buttons */}
      <div className="flex justify-between mt-10 mb-14 md:mb-0 lg:mt-14">
        <Link to="/">
          <ButtonOutlinedBack />
        </Link>
        <ButtonCompleteOrder />
      </div>
    </div>
  );
}

export default CartBottom;

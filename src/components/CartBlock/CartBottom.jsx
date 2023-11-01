import { Link } from "react-router-dom";
import ButtonCompleteOrder from "../Buttons/ButtonCompleteOrder";
import ButtonOutlinedBack from "../Buttons/ButtonOutlinedBack";

function CartBottom() {
  return (
    <div className="mt-20">
      {/* bottom details */}
      <div className="flex justify-between">
        <span className="text-2xl text-[#232323]">
          Gesamtanzahl :<b className="text-[#232323]"> 4 Stück</b>
        </span>
        <span className="text-2xl text-[#232323]">
          Bestellsumme:
          <b className="text-[#fe5f1e]"> 60 €</b>
        </span>
      </div>

      {/* bottom buttons */}
      <div className="flex justify-between mt-14">
        <Link to="/">
          <ButtonOutlinedBack />
        </Link>
        <ButtonCompleteOrder />
      </div>
    </div>
  );
}

export default CartBottom;

import { Link } from "react-router-dom";
import ButtonOutlinedBack from "../Buttons/ButtonOutlinedBack";

function CartEmpty() {
  return (
    <div className="flex flex-col justify-evenly items-center h-[79vh] sm:h-[42vh] xl:h-[49vh]">
      <div className="mt-2 text-center">
        <h2 className="text-2xl mt-10 sm:mt-0 sm:text-3xl font-bold mb-4 text-[#232323]">
          Der Warenkorb ist leer.
        </h2>
        <p className="text-center text-lg sm:text-xl tracking-[.01em] text-[#777]">
          Sie haben noch nichts bestellt.
          <br />
          Um Produkte zu bestellen, gehen Sie zur Startseite.
        </p>
      </div>
      <img
        src="../../../public/img/empty-cart.png"
        className="w-[200px]  sm:my-14"
      />
      <div className="sm:mb-2">
        <Link to="/">
          <ButtonOutlinedBack />
        </Link>
      </div>
    </div>
  );
}

export default CartEmpty;

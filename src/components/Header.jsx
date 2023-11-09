import { Link } from "react-router-dom";
import pizzaLogo from "../assets/img/pizza-logo.svg";
import HeaderCartButton from "./Buttons/HeaderCartButton";
import Search from "./Search/Search";

function Header() {
  return (
    <div className="flex flex-wrap justify-between items-end w-full  bg-white p-4 sm:p-10 sm:rounded-t-xl border-b">
      {/* header logo & title */}

      <Link to="/">
        <div className="flex gap-2 sm:gap-4">
          <img
            src={pizzaLogo}
            alt="Pizza logo Bild"
            width={38}
            className="w-7 sm:w-[38px] "
          />
          <div>
            <p
              to="/"
              className="text-base sm:text-3xl font-bold text-slate-900"
            >
              PizzaHaus
            </p>
            <p className="text-sm sm:text-base font-bold text-gray-600">
              Unsere Pizza, dein Genuss!
            </p>
          </div>
        </div>
      </Link>

      {/* {search field} */}
      <Search />

      {/* header cart button */}
      <Link to="cart">
        <HeaderCartButton />
      </Link>
    </div>
  );
}

export default Header;

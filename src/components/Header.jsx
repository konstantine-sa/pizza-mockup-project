import { Link } from "react-router-dom";
import pizzaLogo from "../assets/img/pizza-logo.svg";
import HeaderCartButton from "./Buttons/HeaderCartButton";

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
      <div className="flex relative  border-[1px] border-gray-400 rounded-xl  lg:w-[400px] h-12 p-3 max-lg:hidden">
        <svg
          width="22"
          height="22"
          viewBox="0 0 48 48"
          className="fill-gray-400 "
        >
          <path d="M20.5 6C12.51 6 6 12.51 6 20.5S12.51 35 20.5 35c3.456 0 6.634-1.221 9.129-3.25l9.81 9.81a1.5 1.5 0 1 0 2.122-2.12l-9.811-9.811A14.426 14.426 0 0 0 35 20.5C35 12.51 28.49 6 20.5 6zm0 3C26.869 9 32 14.131 32 20.5c0 3.103-1.224 5.906-3.209 7.97a1.5 1.5 0 0 0-.32.321A11.455 11.455 0 0 1 20.5 32C14.131 32 9 26.869 9 20.5S14.131 9 20.5 9z" />
        </svg>
        <input
          className="outline-none ml-2"
          placeholder="Pizza suchen..."
        ></input>
      </div>

      {/* header cart button */}
      <Link to="cart">
        <HeaderCartButton />
      </Link>
    </div>
  );
}

export default Header;

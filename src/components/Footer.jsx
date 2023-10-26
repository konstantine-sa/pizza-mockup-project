import pizzaLogo from "../assets/img/pizza-logo.svg";

function Footer() {
  return (
    <div className="flex flex-wrap justify-between items-end w-full  bg-white p-4 sm:p-10 sm:rounded-b-xl border-t">
      <div className="flex gap-2 sm:gap-4">
        <img
          src={pizzaLogo}
          alt="Pizza logo Bild"
          width={38}
          className="w-7 sm:w-[38px] "
        />
        <div>
          <a
            href="/"
            className="text-base sm:text-3xl font-bold text-slate-900"
          >
            PizzaHaus
          </a>
        </div>
      </div>

      <p className="font-bold text-sm">©Copyright 2023</p>
    </div>
  );
}

export default Footer;

function Categories() {
  return (
    <ul className="flex gap-3">
      <li
        className="bg-[#f9f9f9] py-3 px-7  font-semibold text-base rounded-3xl cursor-pointer 
       bg-[#282828] text-white"
      >
        Alle
      </li>
      <li
        className="bg-[#f9f9f9] py-3 px-7 text-[#232323] font-semibold text-base rounded-3xl cursor-pointer 
      hover:bg-[#e0dddd] duration-150 ease-in-out "
      >
        Fleisch
      </li>
      <li
        className="bg-[#f9f9f9] py-3 px-7 text-[#232323] font-semibold text-base rounded-3xl cursor-pointer 
      hover:bg-[#e0dddd] duration-150 ease-in-out "
      >
        Vegetarisch
      </li>
      <li
        className="bg-[#f9f9f9] py-3 px-7 text-[#232323] font-semibold text-base rounded-3xl cursor-pointer 
      hover:bg-[#e0dddd] duration-150 ease-in-out "
      >
        Gegrillt
      </li>
      <li
        className="bg-[#f9f9f9] py-3 px-7 text-[#232323] font-semibold text-base rounded-3xl cursor-pointer 
      hover:bg-[#e0dddd] duration-150 ease-in-out "
      >
        Scharf
      </li>
      <li
        className="bg-[#f9f9f9] py-3 px-7 text-[#232323] font-semibold text-base rounded-3xl cursor-pointer 
      hover:bg-[#e0dddd] duration-150 ease-in-out "
      >
        Calzone
      </li>
    </ul>
  );
}

export default Categories;

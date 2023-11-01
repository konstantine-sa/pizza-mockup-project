function ButtonOutlinedOrder({ itemCount, setItemCount }) {
  return (
    <button
      onClick={() => setItemCount(itemCount + 1)}
      className="group flex gap-2 items-center border-[#fe5f1e] hover:bg-[#fe5f1e] 
    text-[#fe5f1e] hover:text-white fill-[#fe5f1e] hover:fill-white border-[1px] py-2 px-5 rounded-3xl duration-150 cursor-pointer"
    >
      <svg
        width="12"
        height="12"
        xmlns="http://www.w3.org/2000/svg"
        className=" hover:fill-[#fff]"
      >
        <path d="M10.8 4.8H7.2V1.2a1.2 1.2 0 0 0-2.4 0v3.6H1.2a1.2 1.2 0 0 0 0 2.4h3.6v3.6a1.2 1.2 0 0 0 2.4 0V7.2h3.6a1.2 1.2 0 0 0 0-2.4Z" />
      </svg>
      <span className="   font-semibold">Hinzufügen</span>
      <div className="flex justify-center items-center text-sm bg-[#fe5f1e] group-hover:bg-white  text-white group-hover:text-[#fe5f1e] w-6 h-6  rounded-[50%] duration-150">
        <p className=" ">{itemCount}</p>
      </div>
    </button>
  );
}

export default ButtonOutlinedOrder;

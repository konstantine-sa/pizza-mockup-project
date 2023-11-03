function ButtonCompleteOrder() {
  return (
    <button
      className="group flex gap-2 md:py-3 md:px-5 justify-center items-center md:w-[180px] border-[#fe5f1e] bg-[#fe5f1e]  
      text-white hover:bg-[#e1480b] py-2 px-3 md:py-2 md:px-5 rounded-3xl duration-150 cursor-pointer"
    >
      <span className="font-semibold">Jetzt bezahlen</span>
    </button>
  );
}

export default ButtonCompleteOrder;

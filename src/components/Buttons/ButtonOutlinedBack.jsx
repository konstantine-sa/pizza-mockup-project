function ButtonOutlinedBack() {
  return (
    <button
      className="group flex gap-2 md:py-3 md:px-5 justify-center items-center md:w-[180px] border-[#D3D3D3] hover:bg-[#232323] 
      text-[#D3D3D3] hover:text-white fill-[#D3D3D3] hover:fill-white border-[1px] py-2 px-3 md:py-2 md:px-5 rounded-3xl duration-150 cursor-pointer"
    >
      <svg width="8" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 13 1 6.93015 6.86175 1"
          stroke="#D3D3D3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-sm font-semibold">Zurück gehen</span>
    </button>
  );
}

export default ButtonOutlinedBack;
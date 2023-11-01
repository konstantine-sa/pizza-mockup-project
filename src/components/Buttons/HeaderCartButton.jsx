function HeaderCartButton() {
  return (
    <button>
      <div className="w-[60px] h-[30px] sm:w-[140px] sm:h-[50px] relative bg-[#fe5f1e] hover:bg-[#e1480b] duration-150 ease-in-out cursor-pointer rounded-[30px] ">
        <div className="sm:w-[23px] sm:h-[23px] pb-px sm:left-[26px] sm:top-[14px] absolute justify-center items-center inline-flex">
          <div className="sm:w-[23px] sm:h-[22px] text-center text-white text-sm sm:text-base font-semibold font-['Nunito'] leading-[23px] max-sm:hidden">
            0 €
          </div>
        </div>

        <div className="w-px h-[25px] left-[63px] top-[13px] max-sm:hidden absolute bg-white bg-opacity-25"></div>

        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          className="left-[10px] top-[5px] sm:w-[18px] sm:h-[18px] sm:left-[78px] sm:top-[16px] absolute"
        >
          <path
            id="Vector"
            d="M6.72328 16.3333C7.45966 16.3333 8.05662 15.7364 8.05662 15C8.05662 14.2636 7.45966 13.6667 6.72328 13.6667C5.9869 13.6667 5.38995 14.2636 5.38995 15C5.38995 15.7364 5.9869 16.3333 6.72328 16.3333Z"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M14.7233 16.3333C15.4597 16.3333 16.0567 15.7364 16.0567 15C16.0567 14.2636 15.4597 13.6667 14.7233 13.6667C13.987 13.6667 13.39 14.2636 13.39 15C13.39 15.7364 13.987 16.3333 14.7233 16.3333Z"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_3"
            d="M5.16997 4.99999H16.7234L15.6034 10.5933C15.5424 10.9003 15.3754 11.176 15.1317 11.3722C14.8879 11.5684 14.5829 11.6727 14.27 11.6667H7.2233C6.89776 11.6694 6.58245 11.553 6.33684 11.3393C6.09123 11.1256 5.93228 10.8295 5.88997 10.5067L4.87664 2.82666C4.83461 2.50615 4.67759 2.21182 4.43477 1.99844C4.19196 1.78505 3.87989 1.66715 3.55664 1.66666H2.05664"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="left-[37px] top-[3px] sm:w-[10px] sm:h-[23px] sm:left-[104px] sm:top-[14px] absolute text-center text-white text-base font-semibold font-['Nunito'] leading-[23px]">
          0
        </div>
      </div>
    </button>
  );
}

export default HeaderCartButton;

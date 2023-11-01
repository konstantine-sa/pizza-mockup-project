function CartTop() {
  return (
    <div className="flex justify-between items-end w-full">
      <div className="flex items-center gap-1 sm:gap-3 text-base sm:text-4xl font-semibold ">
        <svg
          className="w-4 h-4 sm:w-8 sm:h-8 stroke-black"
          width="12"
          height="12"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
            stroke="current"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
            stroke="current"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
            stroke="current"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        Warenkorb
      </div>

      <div className="group flex justify-end  gap-1  cursor-pointer  text-sm sm:text-xl text-gray-400 ">
        <svg
          className="w-5 h-5 sm:w-8 sm:h-8 bottom-2 stroke-gray-400 group-hover:stroke-gray-950 duration-150"
          width="12"
          height="12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 5h15M6.66663 5.00001V3.33334c0-.44203.17559-.86595.48815-1.17851.31256-.31256.73649-.48816 1.17851-.48816h3.33331c.4421 0 .866.1756 1.1785.48816.3126.31256.4882.73648.4882 1.17851v1.66667m2.5 0V16.6667c0 .442-.1756.8659-.4882 1.1785-.3125.3125-.7364.4881-1.1785.4881H5.83329c-.44202 0-.86595-.1756-1.17851-.4881-.31256-.3126-.48815-.7365-.48815-1.1785V5.00001H15.8333ZM8.33337 9.16667v5.00003M11.6666 9.16667v5.00003"
            stroke="current"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default CartTop;

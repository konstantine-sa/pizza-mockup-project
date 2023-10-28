function CartItem() {
  return (
    <div className="flex w-full pt-8 mt-7 border-t-[1px] border-t-[#f6f6f6]">
      {/* cart item img */}
      <div className="flex items-center mr-4 w-[10%]">
        <img
          className="w-20 h-20"
          src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
          alt="Pizza Foto"
        />
      </div>

      {/* cart item info */}
      <div className="flex flex-col justify-center w-[40%]">
        <h3 className="font-bold text-2xl text-[#232323]">Hähnchen mit Käse</h3>
        <p className="text-lg text-[#8d8d8d]">Dünner Teig, 26 cm.</p>
      </div>

      {/* cart item count */}
      <div className="flex justify-between items-center w-[13%]">
        <div
          className="group cursor-pointer flex justify-center items-center bg-white hover:bg-[#fe5f1e] w-8 h-8 p-0
         border-[#fe5f1e]  border-[2px] rounded-full duration-150"
        >
          <svg
            className="box-border stroke-[#fe5f1e]  group-hover:stroke-white w-3 h-3 duration-150"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="current"
          >
            <path
              d="M6 12L18 12"
              stroke="current"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <b className="text-[22px]">2</b>

        <div
          className="group cursor-pointer flex justify-center items-center bg-white hover:bg-[#fe5f1e] w-8 h-8 p-0
         border-[#fe5f1e]  border-[2px] rounded-full duration-150"
        >
          <svg
            className=" ml-[2px] mt-[2px] fill-[#fe5f1e] group-hover:fill-white w-3 h-3 duration-150"
            width="10"
            height="10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.92001 3.84v4.8c0 .53016-.42984.96-.96.96s-.96-.42984-.96-.96L4 5.76l.00001-1.92V.96c0-.53016.42984-.96.96-.96s.96.42984.96.96v2.88Z"
              fill="current"
            />
            <path
              d="M5.75998 5.92001H.959977c-.53016 0-.95999995-.42984-.95999993-.96 2e-8-.53016.42983993-.96.95999993-.96L3.83998 4l1.92.00001h2.88c.53016 0 .96.42984.96.96s-.42984.96-.96.96h-2.88Z"
              fill="current"
            />
          </svg>
        </div>
      </div>

      {/* cart item price */}
      <div className="flex justify-center items-center w-[33%]">
        <b className="text-[22px]">15 €</b>
      </div>

      {/* cart item remove */}
      <div className="flex justify-end items-center w-[4%]">
        <div
          className="group cursor-pointer flex justify-center items-center bg-white hover:bg-black w-8 h-8 p-0
         border-gray-400 hover:border-black  border-[2px] rounded-full duration-150"
        >
          <svg
            className="rotate-45 mt-[2px] fill-gray-400 group-hover:fill-white w-3 h-3 duration-150"
            width="10"
            height="10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.92001 3.84v4.8c0 .53016-.42984.96-.96.96s-.96-.42984-.96-.96L4 5.76l.00001-1.92V.96c0-.53016.42984-.96.96-.96s.96.42984.96.96v2.88Z"
              fill="current"
            />
            <path
              d="M5.75998 5.92001H.959977c-.53016 0-.95999995-.42984-.95999993-.96 2e-8-.53016.42983993-.96.95999993-.96L3.83998 4l1.92.00001h2.88c.53016 0 .96.42984.96.96s-.42984.96-.96.96h-2.88Z"
              fill="current"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

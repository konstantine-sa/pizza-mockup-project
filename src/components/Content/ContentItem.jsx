import ButtonOutlined from "../Buttons/ButtonOutlined";

function ContentItem() {
  return (
    <div className="w-72 mb-16 text-center">
      <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg" />
      <h4 className="mb-5 text-xl font-extrabold text-[#282828]">
        Cheeseburger-Pizza
      </h4>

      {/* item selector */}
      <div className="flex flex-col rounded-xl p-2 pb-0 bg-[#f3f3f3]">
        <ul className="grid grid-cols-2 mb-2">
          <li className="p-2 bg-white shadow-sm rounded-md cursor-pointer">
            Dünner
          </li>
          <li className="p-2 cursor-pointer">Traditioneller</li>
        </ul>
        <ul className="grid grid-cols-3  mb-2 cursor-pointer">
          <li className="p-2 bg-white shadow-sm rounded-md ">26 cm</li>
          <li className="p-2 cursor-pointer">30 cm</li>
          <li className="p-2 cursor-pointer">40 cm</li>
        </ul>
      </div>

      {/* item bottom */}
      <div className="flex items-center justify-between mt-5">
        <div className="font-black text-xl ">ab 12 €</div>
        <ButtonOutlined />
      </div>
    </div>
  );
}

export default ContentItem;

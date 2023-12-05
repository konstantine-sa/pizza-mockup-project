import { useSelector } from "react-redux";

import CartItem from "./CartItem";

function CartContent() {
  const items = useSelector((state) => state.cart.items);

  return (
    <div>
      <div className="flex flex-col">
        {items.map((item) => (
          <CartItem key={item.id + item.type + item.size} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CartContent;

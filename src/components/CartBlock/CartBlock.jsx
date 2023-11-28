import { useSelector } from "react-redux";

import CartTop from "./CartTop";
import CartContent from "./CartContent";
import CartBottom from "./CartBottom";
import CartEmpty from "./CartEmpty";

function CartBlock() {
  const { items, totalPrice } = useSelector((state) => state.cart);

  if (!totalPrice) {
    return (
      <section className="max-w-[820px] px-4 lg:px-0 sm:my-20 mx-auto">
        <CartEmpty />
      </section>
    );
  }
  return (
    <section className="max-w-[820px]  px-4 lg:px-0 sm:my-20 mx-auto">
      <CartTop />
      <CartContent />
      <CartBottom />
    </section>
  );
}

export default CartBlock;

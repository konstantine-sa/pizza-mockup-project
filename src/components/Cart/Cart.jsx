import CartTop from "./CartTop";
import CartContent from "./CartContent";
import CartBottom from "./CartBottom";

function Cart() {
  return (
    <div className="max-w-[820px] my-20 mx-auto">
      <CartTop />
      <CartContent />
      <CartBottom />
    </div>
  );
}

export default Cart;

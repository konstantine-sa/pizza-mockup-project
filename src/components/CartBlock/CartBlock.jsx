import CartTop from "./CartTop";
import CartContent from "./CartContent";
import CartBottom from "./CartBottom";

function CartBlock() {
  return (
    <section className="max-w-[820px] px-4 lg:px-0 sm:my-20 mx-auto">
      <CartTop />
      <CartContent />
      <CartBottom />
    </section>
  );
}

export default CartBlock;

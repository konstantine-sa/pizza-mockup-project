import CartItem from "./CartItem";

function CartContent() {
  return (
    <div>
      <div className="flex flex-col">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
}

export default CartContent;

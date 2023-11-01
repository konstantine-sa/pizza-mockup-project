import CartItem from "./CartItem";

function CartContent() {
  return (
    <div>
      <div className="flex flex-col">
        <CartItem name="Dubble Cheese" price="13" />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
}

export default CartContent;

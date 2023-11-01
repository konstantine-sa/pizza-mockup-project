import PizzaBlockTopMenu from "./PizzaBlockTopMenu/PizzaBlockTopMenu";
import PizzaItems from "./PizzaItems";
import PizzaTitle from "./PizzaTitle";

function PizzaBlock() {
  return (
    <div>
      <PizzaBlockTopMenu />
      <PizzaTitle />
      <PizzaItems />
    </div>
  );
}

export default PizzaBlock;

import Categories from "./Categories";
import Filter from "./Filter";

function PizzaBlockTopMenu() {
  return (
    <section className="flex justify-between w-full">
      <Categories />
      <Filter />
    </section>
  );
}

export default PizzaBlockTopMenu;

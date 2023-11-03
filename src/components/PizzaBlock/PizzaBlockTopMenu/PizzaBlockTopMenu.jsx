import Categories from "./Categories";
import Filter from "./Filter";

function PizzaBlockTopMenu() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full ">
      <Categories />
      <Filter />
    </section>
  );
}

export default PizzaBlockTopMenu;

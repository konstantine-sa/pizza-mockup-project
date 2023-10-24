import Categories from "./Categories";
import Filter from "./Filter";

function ContentTop() {
  return (
    <section className="flex justify-between w-full">
      <Categories />
      <Filter />
    </section>
  );
}

export default ContentTop;

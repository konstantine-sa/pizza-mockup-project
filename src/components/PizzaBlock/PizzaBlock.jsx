import { useContext, useEffect, useState } from "react";

import PizzaBlockTopMenu from "./PizzaBlockTopMenu/PizzaBlockTopMenu";
import PizzaTitle from "./PizzaTitle";
import PizzaItem from "./PizzaItem";
import PizzaBlockSkeleton from "./PizzaBlockSkeleton";
import { SearchContext } from "../../App";

function PizzaBlock() {
  const { searchValue } = useContext(SearchContext);

  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [filterSelected, setFilterSelected] = useState({
    name: "Beliebtheit",
    sortProperty: "rating",
    sortWay: "desc",
  });

  useEffect(() => {
    setIsLoading(true);
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    fetch(
      `https://654082b145bedb25bfc20558.mockapi.io/pizza?&${category}&sortBy=${filterSelected.sortProperty}&order=${filterSelected.sortWay}${search}`
    )
      .then((res) => res.json())
      .then((json) => {
        setPizzas(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, filterSelected, searchValue]);

  const pizzaItems = pizzas.map((obj) => <PizzaItem key={obj.id} {...obj} />);

  const skeletons = [...new Array(6)].map((_, index) => (
    <PizzaBlockSkeleton key={index} />
  ));

  return (
    <div>
      <PizzaBlockTopMenu
        categoryId={categoryId}
        onClickCategory={(i) => setCategoryId(i)}
        filterSelected={filterSelected}
        setFilterSelected={(i) => setFilterSelected(i)}
      />
      <PizzaTitle />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 justify-center justify-items-center ">
        {isLoading ? skeletons : pizzaItems}
      </div>
    </div>
  );
}

export default PizzaBlock;

import { useEffect, useState } from "react";

import PizzaBlockTopMenu from "./PizzaBlockTopMenu/PizzaBlockTopMenu";
import PizzaTitle from "./PizzaTitle";
import PizzaItem from "./PizzaItem";
import PizzaBlockSkeleton from "./PizzaBlockSkeleton";

function PizzaBlock() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://654082b145bedb25bfc20558.mockapi.io/pizza")
      .then((res) => res.json())
      .then((json) => {
        setPizzas(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <PizzaBlockTopMenu />
      <PizzaTitle />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 justify-center justify-items-center ">
        {isLoading
          ? [...new Array(6)].map((_, index) => (
              <PizzaBlockSkeleton key={index} />
            ))
          : pizzas.map((pizza) => <PizzaItem key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
}

export default PizzaBlock;

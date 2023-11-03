import React from "react";

import PizzaBlockSkeleton from "./PizzaBlockSkeleton";
import PizzaItem from "./PizzaItem";

function PizzaItems() {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://654082b145bedb25bfc20558.mockapi.io/pizza")
      .then((res) => res.json())
      .then((json) => {
        setPizzas(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 justify-center justify-items-center ">
      {isLoading
        ? [...new Array(6)].map((_, index) => (
            <PizzaBlockSkeleton key={index} />
          ))
        : pizzas.map((pizza) => <PizzaItem key={pizza.id} {...pizza} />)}
    </div>
  );
}

export default PizzaItems;

import React from "react";
import ContentItem from "./PizzaItem";
import PizzaBlockSkeleton from "./PizzaBlockSkeleton";

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
    <div className="flex flex-wrap gap-x-10 justify-between ">
      {isLoading
        ? [...new Array(6)].map((_, index) => (
            <PizzaBlockSkeleton key={index} />
          ))
        : pizzas.map((pizza) => <ContentItem key={pizza.id} {...pizza} />)}
    </div>
  );
}

export default PizzaItems;

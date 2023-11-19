import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import qs from "qs";

import PizzaBlockTopMenu, {
  sortList,
} from "./PizzaBlockTopMenu/PizzaBlockTopMenu";
// import PizzaTitle from "./PizzaTitle";
import PizzaItem from "./PizzaItem";
import PizzaBlockSkeleton from "./PizzaBlockSkeleton";
import { SearchContext } from "../../App";
import {
  setCategoryId,
  setSort,
  setFilters,
} from "../../../src/redux/slices/pizzaFilterSlice.jsx";

function PizzaBlock() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchValue } = useContext(SearchContext);
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { categoryId, sort } = useSelector((state) => state.pizzaFilter);
  const sortProperty = sort.sortProperty;
  const sortDirection = sort.sortDirection;

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortList.find((obj) => {
        obj.sortProperty === params.sortProperty;
      });

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    axios
      .get(
        `https://654082b145bedb25bfc20558.mockapi.io/pizza?&${category}&sortBy=${sortProperty}&order=${sortDirection}${search}`
      )
      .then((res) => {
        setPizzas(res.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortProperty, sortDirection, searchValue]);

  // parsing and storing query string
  useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sortProperty,
      sortDirection: sortDirection,
      categoryId,
      searchValue,
    });

    navigate(`?${queryString}`);
  }, [categoryId, sortProperty, sortDirection, searchValue, navigate]);

  const pizzaItems = pizzas.map((obj) => <PizzaItem key={obj.id} {...obj} />);

  const skeletons = [...new Array(6)].map((_, index) => (
    <PizzaBlockSkeleton key={index} />
  ));

  return (
    <div>
      <PizzaBlockTopMenu />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 justify-center justify-items-center ">
        {isLoading ? skeletons : pizzaItems}
      </div>
    </div>
  );
}

export default PizzaBlock;

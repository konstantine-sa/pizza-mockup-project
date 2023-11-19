import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import CategoriesSkeleton from "./CategoriesSkeleton";
import {
  setSort,
  setCategoryId,
  setFilterCategory,
} from "../../../../src/redux/slices/pizzaFilterSlice.jsx";

export const sortList = [
  {
    name: "Beliebtheit",
    sortProperty: "rating",
    sortDirection: "desc",
  },
  {
    name: "Preis ↑",
    sortProperty: "price",
    sortDirection: "asc",
  },
  {
    name: "Preis ↓",
    sortProperty: "price",
    sortDirection: "desc",
  },
  {
    name: "Alphabet A-Z",
    sortProperty: "name",
    sortDirection: "asc",
  },
  {
    name: "Alphabet Z-A",
    sortProperty: "name",
    sortDirection: "desc",
  },
];

function PizzaBlockTopMenu() {
  const categories = useSelector((state) => state.pizzaFilter.filterCategory);

  const sortRef = useRef();

  const dispatch = useDispatch();

  const onClickCategory = (category) => {
    dispatch(setCategoryId(category.id));
    setSelectedCategoryName(category.name);
  };
  const sort = useSelector((state) => state.pizzaFilter.sort);

  const categoryId = useSelector((state) => state.pizzaFilter.categoryId);

  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategoryName, setSelectedCategoryName] =
    useState("Alle Pizzen");

  const onClickSelectFilter = (obj) => {
    dispatch(setSort(obj));
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    axios
      .get("https://654082b145bedb25bfc20558.mockapi.io/categories")
      .then((res) => {
        dispatch(setFilterCategory(res.data));
        setIsLoading(false);
      });
  }, []);

  // on click on outside of sort popup area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(sortRef.current)) {
        setIsVisible(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-between w-full select-none">
        <div>
          <ul className="flex flex-wrap gap-3 justify-center">
            {isLoading ? (
              <CategoriesSkeleton />
            ) : (
              categories.map((category, i) => (
                <li
                  key={category.id}
                  onClick={() => onClickCategory(category)}
                  className={
                    categoryId === category.id
                      ? "py-1 px-4 md:py-3 md:px-7 font-semibold text-sm sm:text-base rounded-3xl cursor-pointer bg-[#282828] text-white"
                      : "bg-[#f9f9f9] py-1 px-4 md:py-3 md:px-7 text-[#232323] text-sm font-semibold sm:text-base rounded-3xl cursor-pointer hover:bg-[#e0dddd] duration-150 ease-in-out "
                  }
                >
                  {category.name}
                </li>
              ))
            )}
          </ul>
        </div>
        {/* Filtering */}
        <div ref={sortRef} className="relative mt-5 w-full sm:w-64 lg:mt-0">
          {/* filter label */}
          <div className="flex">
            <div className="flex  items-center ">
              <svg
                width="10"
                height="6"
                fill="none"
                className={isVisible ? "mr-2 rotate-180" : "mr-2"}
              >
                <path
                  d="M10 5a.6.6 0 0 1-.186.44.6.6 0 0 1-.439.185H.625a.6.6 0 0 1-.44-.186A.6.6 0 0 1 0 5a.6.6 0 0 1 .186-.44L4.56.187A.6.6 0 0 1 5 0a.6.6 0 0 1 .44.186L9.813 4.56A.6.6 0 0 1 10 5Z"
                  fill="#2C2C2C"
                />
              </svg>
              <b className="mr-2  font-bold text-sm sm:text-base">
                Sortieren nach:
              </b>
              <span
                onClick={() => setIsVisible(!isVisible)}
                className="text-[#fe5f1e]  border-b border-[#fe5f1e] border-dashed cursor-pointer"
              >
                {sort.name}
              </span>
            </div>
          </div>

          {/* filter popup */}

          {isVisible && (
            <div className="flex justify-center text-center lg:text-start lg:justify-start absolute w-full sm:w-64 right-0 mt-4 pt-2 bg-[#F9F9F9] shadow-md rounded-lg">
              <ul className="">
                {sortList.map((obj, index) => (
                  <li
                    key={index}
                    onClick={() => onClickSelectFilter(obj)}
                    className={
                      sort.name === obj.name
                        ? "px-5 py-3 cursor-pointer text-[#fe5f1e] bg-[rgba(254,95,30,0.05)]"
                        : "px-5 py-3 cursor-pointer hover:text-[#fe5f1e]"
                    }
                  >
                    {obj.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* selected filter category title */}
      <div className="flex justify-center sm:justify-start my-9 mx-4 bg-[#F9F9F9] sm:bg-white">
        <h2 className="font-bold text-xl md:text-2xl text-[#282828]">
          {selectedCategoryName ? `${selectedCategoryName}` : "Loading..."}
        </h2>
      </div>
    </>
  );
}

export default PizzaBlockTopMenu;

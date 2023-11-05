import { useState, useEffect } from "react";

import CategoriesSkeleton from "./CategoriesSkeleton";

function PizzaBlockTopMenu({
  categoryId,
  onClickCategory,
  filterSelected,
  setFilterSelected,
}) {
  const [categories, setCategories] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const filterList = [
    {
      name: "Beliebtheit",
      sortProperty: "rating",
      sortWay: "desc",
    },
    {
      name: "Preis ↑",
      sortProperty: "price",
      sortWay: "asc",
    },
    {
      name: "Preis ↓",
      sortProperty: "price",
      sortWay: "desc",
    },
    {
      name: "Alphabet A-Z",
      sortProperty: "name",
      sortWay: "asc",
    },
    {
      name: "Alphabet Z-A",
      sortProperty: "name",
      sortWay: "desc",
    },
  ];

  const onClickSelectFilter = (index) => {
    setFilterSelected(index);
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    fetch("https://654082b145bedb25bfc20558.mockapi.io/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full ">
      {/* categories menu */}
      <div>
        <ul className="flex flex-wrap gap-3 justify-center">
          {isLoading ? (
            <CategoriesSkeleton />
          ) : (
            categories.map((categoryName, i) => (
              <li
                key={i}
                onClick={() => onClickCategory(i)}
                className={
                  categoryId === i
                    ? "py-1 px-4 md:py-3 md:px-7 font-semibold text-sm sm:text-base rounded-3xl cursor-pointer bg-[#282828] text-white"
                    : "bg-[#f9f9f9] py-1 px-4 md:py-3 md:px-7 text-[#232323] text-sm font-semibold sm:text-base rounded-3xl cursor-pointer hover:bg-[#e0dddd] duration-150 ease-in-out "
                }
              >
                {categoryName.name}
              </li>
            ))
          )}
        </ul>
      </div>

      {/* Filtering */}
      <div className="relative mt-5 lg:mt-0">
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
              {filterSelected.name}
            </span>
          </div>
        </div>

        {/* filter popup */}

        {isVisible && (
          <div className="absolute w-64 right-0 mt-4 pt-2 bg-white shadow-md rounded-lg">
            <ul className="">
              {filterList.map((obj, index) => (
                <li
                  key={index}
                  onClick={() => onClickSelectFilter(obj)}
                  className={
                    filterSelected.name === obj.name
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
  );
}

export default PizzaBlockTopMenu;

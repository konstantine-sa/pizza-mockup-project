import React from "react";
import CategoriesSkeleton from "./CategoriesSkeleton";

function Categories() {
  const [categories, setCategories] = React.useState([]);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);

  const setCategory = (index) => {
    setActiveIndex(index);
  };

  React.useEffect(() => {
    fetch("https://654082b145bedb25bfc20558.mockapi.io/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <ul className="flex gap-3">
        {isLoading ? (
          <CategoriesSkeleton />
        ) : (
          categories.map((obj) => (
            <li
              key={obj.id}
              onClick={() => setCategory(obj.id)}
              className={
                activeIndex === obj.id
                  ? "py-3 px-7 font-semibold text-base rounded-3xl cursor-pointer bg-[#282828] text-white"
                  : "bg-[#f9f9f9] py-3 px-7 text-[#232323] font-semibold text-base rounded-3xl cursor-pointer hover:bg-[#e0dddd] duration-150 ease-in-out "
              }
            >
              {obj.name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Categories;

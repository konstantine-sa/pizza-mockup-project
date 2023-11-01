import React from "react";

function Filter() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [selected, setSelected] = React.useState(0);

  const filterList = ["Beliebtheit", "Preis", "Alphabet"];
  const selectedFilter = filterList[selected];

  const onClickSelectFilter = (index) => {
    setSelected(index);
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative">
      {/* filter laber */}
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
          <b className="mr-2  font-bold">Sortieren nach:</b>
          <span
            onClick={() => setIsVisible(!isVisible)}
            className="text-[#fe5f1e]  border-b border-[#fe5f1e] border-dashed cursor-pointer"
          >
            {selectedFilter}
          </span>
        </div>
      </div>

      {/* filter popup */}

      {isVisible && (
        <div className="absolute w-32 right-0 mt-4 pt-2 bg-white shadow-md rounded-lg">
          <ul className="">
            {/* <li className="px-5 py-3 cursor-pointer font-bold text-[#fe5f1e] bg-[rgba(254,95,30,0.05)]">
              Beliebtheit
            </li>
            <li className="px-5 py-3 cursor-pointer hover:text-[#fe5f1e]">
              Preis
            </li>
            <li className="px-5 py-3 cursor-pointer hover:text-[#fe5f1e]">
              Alphabet
            </li> */}
            {filterList.map((filterItem, index) => (
              <li
                key={index}
                onClick={() => onClickSelectFilter(index)}
                className={
                  selected === index
                    ? "px-5 py-3 cursor-pointer text-[#fe5f1e] bg-[rgba(254,95,30,0.05)]"
                    : "px-5 py-3 cursor-pointer hover:text-[#fe5f1e]"
                }
              >
                {filterItem}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Filter;

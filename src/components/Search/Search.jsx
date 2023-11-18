import { useContext, useRef, useCallback, useState } from "react";
import debounce from "lodash.debounce";

import { SearchContext } from "../../App";

function Search() {
  // local state to debounce search input
  const [inputValue, setInputValue] = useState("");

  const { setSearchValue } = useContext(SearchContext);
  const inputRef = useRef("");

  const onClickClear = () => {
    setInputValue("");
    setSearchValue("");
    inputRef.current.focus();
  };

  // debounce search input
  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    []
  );

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className="grid grid-cols-[1fr_7fr_1fr]  items-center  border-[1px] border-gray-400 rounded-xl  lg:w-[400px] h-12  max-lg:hidden">
      {/* search icon */}
      <svg
        className="justify-self-center fill-gray-400 "
        width="22"
        height="22"
        viewBox="0 0 48 48"
      >
        <path d="M20.5 6C12.51 6 6 12.51 6 20.5S12.51 35 20.5 35c3.456 0 6.634-1.221 9.129-3.25l9.81 9.81a1.5 1.5 0 1 0 2.122-2.12l-9.811-9.811A14.426 14.426 0 0 0 35 20.5C35 12.51 28.49 6 20.5 6zm0 3C26.869 9 32 14.131 32 20.5c0 3.103-1.224 5.906-3.209 7.97a1.5 1.5 0 0 0-.32.321A11.455 11.455 0 0 1 20.5 32C14.131 32 9 26.869 9 20.5S14.131 9 20.5 9z" />
      </svg>
      <input
        ref={inputRef}
        className=" outline-none  ml-2"
        value={inputValue}
        onChange={onChangeInput}
        placeholder="Pizza suchen..."
      ></input>

      {/* close icon */}
      {inputValue && (
        <svg
          className=" w-7 h-7  justify-self-center stroke-slate-500 hover:stroke-slate-800 hover:stroke-[2px] cursor-pointer duration-150 ease-in-out"
          onClick={() => onClickClear()}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <rect
              width="12"
              height="12"
              fill="current"
              stroke="none"
            ></rect>{" "}
            <path
              d="M7 17L16.8995 7.10051"
              stroke="current"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M7 7.00001L16.8995 16.8995"
              stroke="current"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      )}
    </div>
  );
}

export default Search;

function Filter() {
  return (
    <div className="relative">
      {/* filter laber */}
      <div className="flex">
        <div className="flex items-center">
          <svg width="10" height="6" fill="none" className="mr-2">
            <path
              d="M10 5a.6.6 0 0 1-.186.44.6.6 0 0 1-.439.185H.625a.6.6 0 0 1-.44-.186A.6.6 0 0 1 0 5a.6.6 0 0 1 .186-.44L4.56.187A.6.6 0 0 1 5 0a.6.6 0 0 1 .44.186L9.813 4.56A.6.6 0 0 1 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
          <b className="mr-2 font-bold">Sortieren nach:</b>
          <span className="text-[#fe5f1e] border-b border-[#fe5f1e] border-dashed cursor-pointer">
            Beliebtheit
          </span>
        </div>
      </div>

      {/* filter popup */}
      <div className="absolute w-32 right-0 mt-4 pt-2 bg-white shadow-md rounded-lg">
        <ul>
          <li className="px-5 py-3 cursor-pointer font-bold text-[#fe5f1e] bg-[rgba(254,95,30,0.05)]">
            Beliebtheit
          </li>
          <li className="px-5 py-3 cursor-pointer">Preis</li>
          <li className="px-5 py-3 cursor-pointer">Alphabet</li>
        </ul>
      </div>
    </div>
  );
}

export default Filter;

import React from "react";

function NotFoundBlock() {
  return (
    <div className="flex flex-col h-[75vh] sm:h-[57vh] w-full items-center text-gray-600">
      <h1 className="font-black text-4xl lg:text-9xl mt-6 lg:mt-14">404</h1>
      <h2 className="font-bold text-2xl lg:text-6xl mt-6 lg:mt-8">
        Page not found
      </h2>
      <h2 className="font-bold text-2xl lg:text-6xl  lg:mt-8">
        Seite nicht gefunden
      </h2>
    </div>
  );
}

export default NotFoundBlock;

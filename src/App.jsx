import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import NotFound from "./Pages/NotFound";
import { useContext, useState } from "react";
import { createContext } from "react";

export const SearchContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="bg-[#ffdf8c] p-0 sm:p-10">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <div className="max-w-[1400px] h-[100%] mx-auto bg-white sm:rounded-xl  ">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;

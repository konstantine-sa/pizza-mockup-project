import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Pizza from "./Pages/Pizza";
import Cart from "./Pages/Cart";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="bg-[#ffdf8c] p-0 sm:p-10">
      <div className="max-w-[1400px] h-[100%] mx-auto bg-white sm:rounded-xl  ">
        <Header />

        <Routes>
          <Route path="/" element={<Pizza />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;

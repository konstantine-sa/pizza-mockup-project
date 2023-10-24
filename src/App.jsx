import Header from "./components/Header";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="bg-[#ffdf8c] p-0 sm:p-10">
      <div className="max-w-[1400px] h-[100%] bg-white sm:rounded-xl  ">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;

import Cart from "../Cart/Cart";
import ContentItems from "./ContentItems";
import ContentTitle from "./ContentTitle";
import ContentTop from "./ContentTop/ContentTop";

function Content() {
  return (
    <section className="my-10 mx-auto px-10">
      <ContentTop />
      <ContentTitle />
      <ContentItems />
      {/* <Cart /> */}
    </section>
  );
}

export default Content;

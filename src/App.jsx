import {
  Services,
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  SpecialOffers,
  Subscribe,
} from "./sections";
import Nav from "./components/Nav";
function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">Popular Products</section>
      <section className="padding">SuperQuality </section>
      <section className="padding-x py-10">Services</section>
      <section className="padding">SpecialOffers</section>
      <section className="  bg-slate-400 padding ">CustomerReviews</section>
      <section className="padding-x sm:py-32 py-16 w-full">Subscribe</section>
      <section className=" bg-black padding-x padding-t pb-8">Footer</section>
    </main>
  );
}

export default App;

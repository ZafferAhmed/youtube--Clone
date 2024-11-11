import { useEffect, useState } from "react";
import Body from "./Body";
import Header from "./Header";
import Sidebar from "./Sidebar";

const App = () => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      // const res = await fetch(
      //   "https://api.themoviedb.org/3/movie/157336?api_key=8810d9acb80776d7abc1c7abd47d311a&append_to_response=videos,images"
      // );
      const data = await response.json();
      // const data1 = await res.json();

      setProducts(data);
      // setProducts(data1?.images?.backdrops);
    } catch (error) {
      console.log(error);
      setProducts([]);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-x-hidden">
        <Sidebar />
        <div className="flex w-full h-fit justify-evenly items-center bg-gray-50 flex-wrap">
          {products?.map((item, i) => (
            <Body key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;

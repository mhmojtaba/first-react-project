import "../HomePage/homePageStyle.css";
import Cart from "../../Components/Cart";
// import { FakeData } from "../../FakeData/FakeData";
import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [productLisst, setProductLisst] = useState([]);

  useEffect(() => {
    axios
      .get("http://fakestoreaspi.com/products")
      .then((data) => {
        setProductLisst(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      dir="rtl"
      className="bg-light d-flex gap-2 flex-wrap justify-content-center align-items-center"
    >
      {productLisst.map((item) => {
        return (
          <div
            key={`productList-${item.id}`}
            className="home-cart-container mb-2"
          >
            <Cart
              productImage={item.image}
              productName={item.title}
              category={item.category}
              productRate={item.rating.rate}
              productRateCount={item.rating.count}
              productPrice={item.price}
              productTag="موجودی محدود"
            />
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;

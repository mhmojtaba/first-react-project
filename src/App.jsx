//import LoginPage from "./components/pages/loginpage/loginpage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./components/BaSalam/Pages/HomePage";
// import Cart from "./components/cart/cart";

function App() {
  return (
    // <div style={{ width: "250px", height: "auto" }}>
    //   <Cart
    //     cartImage="https://dkstatics-public.digikala.com/digikala-products/bae4a15494947baf5540c64afee44073415e2b26_1664870683.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
    //     currentPrice="40.000.000"
    //     discount="15"
    //     mainPrice="45,000,000.00"
    //   />
    // </div>
    // <div className="w-100 h-100">
    //   <LoginPage />
    // </div>
    <>
      <div>
        <HomePage />
      </div>
    </>
  );
}

export default App;

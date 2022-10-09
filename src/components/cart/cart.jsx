import "./cart.css";

const Cart = (prop) => {
  return (
    <div className="cartcontainer">
      <div className="cartimagecontainer">
        <img src={prop.cartImage} alt="" />
      </div>
      <div className="cartprice" style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <p>تومان</p>
          <p style={{ marginLeft: "10px" }}>{prop.currentPrice}</p>
        </div>
        <div className="discount">
          <p>{prop.discount}%</p>
        </div>
      </div>
      <del style={{ display: "flex", marginLeft: "2rem" }}>
        {prop.mainPrice}
      </del>
    </div>
  );
};

export default Cart;

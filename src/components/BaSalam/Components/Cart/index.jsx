import { MdStoreMallDirectory, MdStar, MdAttachMoney } from "react-icons/md";
import "./cart.css";

const Cart = (props) => {
  return (
    <div className="w-100 bg-white p-4">
      <div className="w-100 cart-image-container position-relative">
        <img className="w-100 h-100" src={props.productImage} alt="" />
        <div className="position-absolute top-0 cart-tag px-3 py-1 text-white cart-text">
          {props.productTag}
        </div>
      </div>
      <h5 className="mt-2 mb-0 cart-text">{props.productName}</h5>
      <p className="d-flex align-items-center gap-2 mt-3 mb-0">
        <MdStoreMallDirectory className="text-black-50" />
        <span className="text-black-50">{props.category}</span>
      </p>
      <p className="d-flex align-items-center gap-2 cart-text">
        <MdStar className="" />
        <h5 className="m-0 p-0">{props.productRate}</h5>
        <span className="fs-7 text-muted">
          (<span>{props.productRateCount}</span>
          نظر )
        </span>
      </p>
      <div className="d-flex justify-content-between">
        <div>
          <button className="cartaddbtn rounded d-flex align-items-center justify-content-center p-0 fs-2 ">
            +
          </button>
        </div>
        <div>
          <h3>
            <span>{props.productPrice}</span>
            <MdAttachMoney />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;

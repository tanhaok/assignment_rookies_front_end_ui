import { useState, useEffect } from "react";
import { getCartByAccId } from "../../service/CartService";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const initialize = () => {
    let accId = localStorage.getItem("accId");
    let token = localStorage.getItem("token");
    getCartByAccId(accId, token)
      .then((res) => {
        setCartItems(res.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div
      className="Cart justify-content-center w-100 align-items-center"
      style={{ marginTop: "2rem" }}
    >
      <div className="title fs-1 text-muted border-bottom w-75">
        Your Cart:
      </div>
      <div className="show-items" style={{ margin: "2rem" }}>
        {cartItems?.map((item) => (
          <div
            className="cart-item border-bottom d-flex w-50 justify-content-evenly"
            style={{ padding: "1rem" }}
          >
            <div className="item-name">{item.name}</div>
            <div className="item-quantity"> {item.quantity}</div>
            <div className="item-price">{item.price}</div>
            <div className="item-temporary-sum">{item.quantity * item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

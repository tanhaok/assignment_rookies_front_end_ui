import { useState, useEffect } from "react";
import { getCartByAccId } from "../../service/CartService";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Paper,
  TableRow,
  TableHead,
} from "@mui/material";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let accId = localStorage.getItem("accId");
    let token = localStorage.getItem("token");
    getCartByAccId(accId, token)
      .then((res) => {
        setCartItems(res.data.cartItems);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getTotal = () => {
    let sum = 0;
    cartItems.forEach((ele) => {
      sum = sum + ele.price + ele.quantity;
    });
    return sum;
  };

  const checkOut = () => {
    alert("Your cart is Checkout successfully");
  };
  return (
    <div
      className="Cart justify-content-center w-100 align-items-center"
      style={{ marginTop: "2rem" }}
    >
      <div className="title fs-1 text-muted border-bottom w-75">Your Cart:</div>
      <div className="show-items" style={{ margin: "2rem" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Sum</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems?.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">$ &nbsp; {item.price}</TableCell>
                  <TableCell align="right">
                    $ &nbsp; {(item.quantity * item.price).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className="sum w-100 d-flex flex-column align-items-end text-end fs-4" style={{paddingRight:"2rem", marginBottom:"1rem"}}>
        <div className="sum-money">
          <div>Sum: $&nbsp;{getTotal().toFixed(2)}</div>
          <div>Fax: $&nbsp;{(getTotal() * 0.1).toFixed(2)}</div>
          <div>Total: $&nbsp;{(getTotal() * 0.1 + getTotal()).toFixed(2)}</div>
        </div>
        <div className="checkout">
          <button className="btn btn-primary"  onClick={checkOut}>
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

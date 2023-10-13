import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { getcarts } from "./Service";
import { useSelector } from "react-redux";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [carts, setCarts] = useState([]);
  const cartProduct = useSelector((state) => state?.data?.cart);
  console.log("cart:", cartProduct);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await getcarts();
      setCarts(response?.data);
    } catch (error) {
      console.error(error);
    } finally {
      console.log(loading);
      setLoading(false);
    }
  };
  console.log(carts);
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Link to="/">Home</Link>
      <div className="cart">
        <h1>Shopping Cart</h1>
        <table>
          <thead>
            <tr>
              <th>Items</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{cartProduct.id}</td>
              <td>{cartProduct.title}</td>
              <td>
                <button className="decrement">-</button>
                <span className="quantity">1</span>
                <button className="increment">+</button>
              </td>
              <td className="item-total">{cartProduct.price}</td>
            </tr>
          </tbody>
        </table>
        {/* <p className="total">Total: $60</p>*/}
      </div>
      <div className="layoutt">
        <div className="summary">
          <div className="subtotal">Subtotal: $60</div>
          <div className="tax">Sales Tax (8%): $4.80</div>
          <input type="text" placeholder="Coupon Code" class="coupon-code" />
          <div className="grand-total">Grand Total: $64.80</div>
        </div>
        <div className="shipping">
          <input type="radio" name="shipping" id="standard" checked />
          <label for="standard">Standard Shipping (Free)</label>
          <input type="radio" name="shipping" id="express" />
          <label for="express">Express Shipping (+$10)</label>
        </div>
        <button className="checkout">Checkout</button>
      </div>
    </>
  );
};

export default Cart;

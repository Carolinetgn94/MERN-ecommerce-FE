import "./Cart.css";
import { RxCross1 } from "react-icons/rx";
import React, { useState } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cart.action";

function Cart({ setOpenCart }) {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function removeFromCartHandler(data) {
    dispatch(removeFromCart(data));
  }

  const totalPrice = cart.reduce((acc, item) => acc + item.qty * item.price, 0);

  const quantityChangeHandler = (data) => {
    dispatch(addToCart(data));
  };

  return (
    <div className="cartContainer">
      {cart && cart.length === 0 ? (
        <div className="closeButton">
          <RxCross1 size={25} onClick={() => setOpenCart(false)} />
          <h3>Cart Items is empty!</h3>
        </div>
      ) : (
        <>
          <RxCross1 size={25} onClick={() => setOpenCart(false)} />
          <div className="cartItemsQty">
            <IoBagHandleOutline className="cartIcon" size={25} />
            <h5>{cart.length} Items</h5>
          </div>
          <br />
          <div className="cartItemsSection">
            {cart &&
              cart.map((i, index) => (
                <CartItemCard
                  key={index}
                  data={i}
                  quantityChangeHandler={quantityChangeHandler}
                  removeFromCartHandler={removeFromCartHandler}
                />
              ))}
          </div>
          <div className="checkout">
            <Link to="/checkout">
              <button>Checkout (SGD${totalPrice}) </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

function CartItemCard({ data, quantityChangeHandler, removeFromCartHandler }) {
  const [value, setValue] = useState(data.qty);
  const totalPrice = data.price * value;

  function increment(data) {
    setValue(value + 1);
    const updatedCartData = { ...data, qty: value + 1 };
    quantityChangeHandler(updatedCartData);
  }

  function decrement(data) {
    setValue(value === 1 ? 1 : value - 1);
    const updatedCartData = { ...data, qty: value === 1 ? 1 : value - 1 };
    quantityChangeHandler(updatedCartData);
  }

  return (
    <div className="cartItemCard">
      <div className="incrementButton" onClick={() => increment(data)}>
        <HiPlus size={18} />
      </div>
      <span className="itemQty">{data.qty}</span>
      <div className="decrementButton" onClick={() => decrement(data)}>
        <HiOutlineMinus size={18} />
      </div>
      <div className="cartProductImage">
        <img src="" alt="" />
      </div>
      <div className="cartProductDetails">
        <h1>{data.name}</h1>
        <h4 className="cartItemPrice">
          $ {data.price} * {value}{" "}
        </h4>
        <h4 className="cartTotalPrice">SGD{totalPrice}</h4>
      </div>
      <div className="removeCartItem">
        <button onClick={() => removeFromCartHandler(data)}>Remove</button>
      </div>
    </div>
  );
}

export default Cart;

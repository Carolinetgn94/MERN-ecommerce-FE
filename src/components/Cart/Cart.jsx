import { RxCross1 } from "react-icons/rx";
import "./Cart.css";
import React, {useState} from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";

function Cart ({setOpenCart}) {
    // static data
    const cartData = [
        {
            name: "iPhone 15 pro max 512 gb",
            description: "gold color",
            price: "2155",
        },
        {
            name: "iPhone 15 pro max 512 gb",
            description: "gold color",
            price: "2675",
        },
        {
            name: "iPhone 15 pro max 512 gb",
            description: "gold color",
            price: "2455",
        }
    ]

    return (
        <div className="cartContainer">
            <div className="closeButton">
                <RxCross1 
                    size={25}
                    onClick={() => setOpenCart(false)}
                />
            </div>
            <div className="cartItemsQty">
                <IoBagHandleOutline className="cartIcon" size={25} />
                <h5>3 Items</h5>
            </div>
            <br />
            <div className="cartItemsSection"> 
                {
                    cartData && cartData.map((i, index) => (
                        <CartItemCard key={index} data={i} />
                    ))
                }
            </div>
            <div className="checkout">
                <Link to="/checkout">
                <button>Checkout</button>
                </Link>
            </div>
        </div>
    )
}

function CartItemCard({data}) {
    const [value, setValue] = useState(1);
    const totalPrice = data.price * value;


    return(
        <div className="cartItemCard">
            <div className="incrementButton" onClick={() => setValue(value + 1)}>
                <HiPlus size={18}/>
            </div>
            <span className="itemQty">{value}</span>
            <div className="decrementButton" onClick={() => setValue(value === 1 ? 1 : value - 1)}>
                <HiOutlineMinus size={18}/>
            </div>
            <div className="cartProductImage">
                <img 
                src="https://www.nespresso.com/ecom/medias/sys_master/public/17585211473950/GalleryImage-1550x1550px-20.jpg?impolicy=medium&imwidth=1550"
                alt=""
                />
            </div>
            <div className="cartProductDetails">
                <h1>{data.name}</h1>
                <h4 className="cartItemPrice">$ {data.price} * {value} </h4>
                <h4 className="cartTotalPrice">SGD{totalPrice}</h4>
            </div>
            <div className="removeItem">
                <RxCross1 />
            </div>
        </div>
    )
}

export default Cart
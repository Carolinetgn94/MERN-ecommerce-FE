import "./WishList.css";
import { RxCross1 } from "react-icons/rx";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../redux/actions/wishlist.action";
import { addToCart } from "../../redux/actions/cart.action";
import { toast } from "react-toastify";

function WishList ({setOpenWishList}) {
    const { wishlist } = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();

    function removeFromWishlistHandler(data) {
        dispatch(removeFromWishlist(data));
      }
    
      const addToCartHandler = (data) => {
        const newData = {...data, qty:1};
        dispatch(addToCart(newData));
        toast.success("Item added to cart!")
        setOpenWishList(false);
      }  

    return (
        <div className="cartContainer">
            <div className="closeButton">
                <RxCross1 
                    size={25}
                    onClick={() => setOpenWishList(false)}
                />
            </div>
            <div className="cartItemsQty">
                <AiOutlineHeart className="cartIcon" size={25} />
                <h5> {wishlist && wishlist.length} Items</h5>
            </div>
            <br />
            <div className="cartItemsSection"> 
                {
                    wishlist && wishlist.map((i, index) => (
                        <CartItemCard key={index} data={i} removeFromWishlistHandler={removeFromWishlistHandler} addToCartHandler={addToCartHandler}/>
                    ))
                }
            </div>
           
        </div>
    )
}

function CartItemCard({data, removeFromWishlistHandler, addToCartHandler}) {
    const [value, setValue] = useState(1);
    const totalPrice = data.price * value;


    return(
        <div className="cartItemCard">
            <div className="addToCart">
                <BsCartPlus size={30} title="Add to Cart" onClick={()=> addToCartHandler(data)}/>
            </div>
            <div className="cartProductImage">
                <img 
                src=""
                alt=""
                />
            </div>
            <div className="cartProductDetails">
                <h1>{data.name}</h1>
                <h4 className="cartItemPrice">$ {totalPrice} </h4>
              
            </div>
            <div className="removeItem">
                <button onClick={() => removeFromWishlistHandler(data)}>Remove</button>
            </div>
        </div>
    )
}

export default WishList;
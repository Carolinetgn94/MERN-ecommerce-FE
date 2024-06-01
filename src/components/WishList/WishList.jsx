import "./WishList.css";
import { RxCross1 } from "react-icons/rx";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";

function WishList ({setOpenWishList}) {
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
                    onClick={() => setOpenWishList(false)}
                />
            </div>
            <div className="cartItemsQty">
                <AiOutlineHeart className="cartIcon" size={25} />
                <h5>Wishlist</h5>
            </div>
            <br />
            <div className="cartItemsSection"> 
                {
                    cartData && cartData.map((i, index) => (
                        <CartItemCard key={index} data={i} />
                    ))
                }
            </div>
           
        </div>
    )
}

function CartItemCard({data}) {
    const [value, setValue] = useState(1);



    return(
        <div className="cartItemCard">
            <div className="addToCart">
                <BsCartPlus size={30} title="Add to Cart" />
            </div>
            <div className="cartProductImage">
                <img 
                src="https://www.nespresso.com/ecom/medias/sys_master/public/17585211473950/GalleryImage-1550x1550px-20.jpg?impolicy=medium&imwidth=1550"
                alt=""
                />
            </div>
            <div className="cartProductDetails">
                <h1>{data.name}</h1>
                <h4 className="cartItemPrice">$ {data.price} </h4>
              
            </div>
            <div className="removeItem">
                <button>Remove</button>
            </div>
        </div>
    )
}

export default WishList;
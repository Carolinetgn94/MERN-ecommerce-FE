import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import React , {useState} from "react";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";

function NavBar() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const [openCart, setOpenCart] = useState(false);
  const [openWishList, setOpenWishList] = useState(false);

  return (
    <div className="nav-items">
      <Link to="/">
        <h3 className="home-link">Home</h3>
      </Link>
      <Link to="/products">
        <h3 className="products-link">Products</h3>
      </Link>
      <Link to="/faq">
        <h3 className="FAQ-link">FAQ</h3>
      </Link>
      <div className="wishlist" onClick={() => setOpenWishList(true)}>
        <AiOutlineHeart size={30} />
        <span className="wishcount">{wishlist && wishlist.length}</span>
      </div>
      <div className="shoppingcart" onClick={() => setOpenCart(true)}>
        <AiOutlineShoppingCart size={30} />
        <span className="cartcount">
          {cart && cart.length}
          </span>
      </div>
      <div className="profile">
        
        {isAuthenticated ? (
          <Link to="/profile">
            <img src={`${user.avatar?.url}`} alt="" />
            <p className="profileName">{`Hello, ${user.name}`}</p>
            <CgProfile size={30} />
          </Link>
        ) : (
          <Link to="/login">
            <CgProfile size={30} />
          </Link>
        )}
      </div>

            {
                openCart ? <Cart setOpenCart={setOpenCart} /> : null
            }
             {
                openWishList ? <WishList setOpenWishList={setOpenWishList} /> : null
            }

    </div>
  );
}

export default NavBar;

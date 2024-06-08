import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user.reducer";
import { sellerReducer } from "./reducers/seller.reducer";
import { productReducer } from "./reducers/product.reducer";
import { cartReducer } from "./reducers/cart.reducer";
import { wishlistReducer } from "./reducers/wishlist.reducer";

const Store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
    product: productReducer,
    products: productReducer,
    allProducts: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default Store;

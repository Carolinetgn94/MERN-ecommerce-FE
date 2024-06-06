import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user.reducer";
import { sellerReducer } from "./reducers/seller.reducer";
import { productReducer } from "./reducers/product.reducer";

const Store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
    product: productReducer,
  },
});

export default Store;

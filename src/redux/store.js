import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user.reducer";
import { sellerReducer } from "./reducers/seller.reducer";

const Store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
  },
});

export default Store;

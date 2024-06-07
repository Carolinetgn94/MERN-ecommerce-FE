import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  success: null,
  error: null,
  product: null,
};

export const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("productCreateRequest", (state) => {
      state.isLoading = true;
      state.success = null;
      state.error = null;
    })
    .addCase("productCreateSuccess", (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
      state.success = true;
    })
    .addCase("productCreateFail", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    })
    .addCase("getAllproductsShopRequest", (state) => {
        state.isLoading = true;
    })
    .addCase("getAllproductsShopSuccess", (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
    })
    .addCase("getAllproductsShopFail", (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
    .addCase("deleteProductRequest", (state) => {
        state.isLoading = true;
    })
    .addCase("deleteProductSuccess", (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
    })
    .addCase("deleteProductFail", (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});

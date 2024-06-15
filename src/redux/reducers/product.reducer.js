import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  success: null,
  error: null,
  product: null,
  products: null,
  allProducts: null,
  categories: null,
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
    .addCase("getAllProductsRequest", (state) => {
      state.isLoading = true;
    })
   .addCase("getAllProductsSuccess", (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
    })
   .addCase("getAllProductsFailed", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase("getProductDetailsRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("getProductDetailsSuccess", (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    })
    .addCase("getProductDetailsFail", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase("editProductRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("editProductSuccess", (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
      state.success = true;
    })
    .addCase("editProductFail", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase("getAllCategoriesRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("getAllCategoriesSuccess", (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    })
    .addCase("getAllCategoriesFail", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase("getAllProductsByCategoryRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("getAllProductsByCategorySuccess", (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
    })
    .addCase("getAllProductsByCategoryFail", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});

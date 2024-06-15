import axios from "axios";
import { beServer } from "../../server";


export const createProduct = (newForm) => async (dispatch) => {
    try {
        dispatch({
            type: "productCreateRequest",
        });
        const config = { headers: {"Content-Type": "multipart/form-data"}};

        const {data} = await axios.post(
            `${beServer}/product/create-product`,
            newForm,
            config
        );
        dispatch({
            type: "productCreateSuccess",
            payload: data.product,
        });
    } catch (error) {
        dispatch({
            type: "productCreateFail",
            payload: error.response.data.message,
        });
    }
}

export const getAllProductsShop = (id) => async(dispatch) => {
    try {
        dispatch({
            type: "getAllproductsShopRequest",
        });

        const {data} = await axios.get(`${beServer}/product/get-all-products-shop/${id}`);
        dispatch({
            type: "getAllproductsShopSuccess",
            payload: data.products,
        });

    } catch (error) {
        dispatch({
            type: "getAllproductsShopFail",
            payload: error.response.data.message,
        });
    }
}

export const deleteProduct = (id) => async(dispatch) => {
    try {
        dispatch({
            type: "deleteProductRequest",
        })

        const {data} =  await axios.delete(`${beServer}/product/delete-shop-product/${id}`,{
            withCredentials: true,
        });

        dispatch({
            type:"deleteProductSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "deleteProductFail",
            payload: error.response.data.message,
        });
    }
}

export const getAllProducts = () => async (dispatch) => {
    try {
      dispatch({
        type: "getAllProductsRequest",
      });
  
      const { data } = await axios.get(`${beServer}/product/get-all-products`);
      dispatch({
        type: "getAllProductsSuccess",
        payload: data.products,
      });
    } catch (error) {
      dispatch({
        type: "getAllProductsFailed",
        payload: error.response.data.message,
      });
    }
  };

  export const getProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: "getProductDetailsRequest" });
  
      const { data } = await axios.get(`${beServer}/product/get-product-details/${id}`);
      dispatch({
        type: "getProductDetailsSuccess",
        payload: data.product,
      });
    } catch (error) {
      dispatch({
        type: "getProductDetailsFail",
        payload: error.response.data.message,
      });
    }
  };

  export const editProduct = (id, updatedForm) => async (dispatch) => {
    try {
      dispatch({
        type: "editProductRequest",
      });
      const config = { headers: { "Content-Type": "multipart/form-data" } };
  
      const { data } = await axios.put(
        `${beServer}/product/edit-product/${id}`,
        updatedForm,
        config
      );
      dispatch({
        type: "editProductSuccess",
        payload: data.product,
      });
    } catch (error) {
      dispatch({
        type: "editProductFail",
        payload: error.response.data.message,
      });
    }
  };
  
  export const getAllCategories = () => async (dispatch) => {
    try {
      dispatch({ type: "getAllCategoriesRequest" });
      const { data } = await axios.get(`${beServer}/category/get-all-categories`);
      dispatch({ type: "getAllCategoriesSuccess", payload: data.categories });
    } catch (error) {
      dispatch({ type: "getAllCategoriesFail", payload: error.response.data.message });
    }
  };


  export const getAllProductsByCategory = (category) => async (dispatch) => {
    try {
      dispatch({ type: "getAllProductsByCategoryRequest" });
      const { data } = await axios.get(`${beServer}/product/get-all-products-by-category/${category}`);
      dispatch({ type: "getAllProductsByCategorySuccess", payload: data.products });
    } catch (error) {
      dispatch({ type: "getAllProductsByCategoryFail", payload: error.response.data.message });
    }
  };

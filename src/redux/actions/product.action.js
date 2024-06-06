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
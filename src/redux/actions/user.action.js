import axios from "axios";
import { beServer } from "../../server";

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const { data } = await axios.get(`${beServer}/user/getuser`, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (err) {
    dispatch({
      type: "LoadUserFail",
      payload: err.response.data.message,
    });
  }
};


export const loadSeller = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadSellerRequest",
    });
    const { data } = await axios.get(`${beServer}/shop/getshop`, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadSellerSuccess",
      payload: data.seller,
    });
  } catch (err) {
    dispatch({
      type: "LoadSellerFail",
      payload: err.response.data.message,
    });
  }
};
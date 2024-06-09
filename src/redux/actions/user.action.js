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

export const updateUserInformation =
  (name, email, phoneNumber, password) => async (dispatch) => {
    try {
      dispatch({
        type: "updateUserInfoRequest",
      });

      const { data } = await axios.put(
        `${beServer}/user/update-user-info`,
        {
          email,
          password,
          phoneNumber,
          name,
        },
        {
          withCredentials: true,
        }
      );

      dispatch({
        type: "updateUserInfoSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "updateUserInfoFailed",
        payload: error.response.data.message,
      });
    }
  };

export const updatUserAddress =
  (country, city, address1, address2, postalCode, addressType) => async (dispatch) => {
    try {
      dispatch({
        type: "updateUserAddressRequest",
      });

      const { data } = await axios.put(
        `${beServer}/user/update-user-addresses`,
        {
          country,
          city,
          address1,
          address2,
          postalCode,
          addressType
        },
        { withCredentials: true }
      );

      dispatch({
        type: "updateUserAddressSuccess",
        payload: {
          message: "User address updated succesfully!",
          user: data.user,
        },
      });
    } catch (error) {
      dispatch({
        type: "updateUserAddressFailed",
        payload: error.response.data.message,
      });
    }
  };

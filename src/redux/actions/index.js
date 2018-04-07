import axios from "axios";

const url = "https://www.mocky.io/v2/5ac4842c2f00005600f5f9fb";

export const getResList = () => {
  return dispatch => {
    axios
      .get(url)
      .then(response => {
        dispatch({
          type: "RECEIVED_RESTAURENT_LIST",
          payload: response.data
        });
      })
      .catch(e => {
        dispatch({
          type: "FAILED_TO_GET_RESTAURENT_LIST",
          payload: e
        });
      });
  };
};

export const updateUserLocation = location => {
  return {
    type: "UPDATE_USER_LOCATION",
    payload: location
  };
};

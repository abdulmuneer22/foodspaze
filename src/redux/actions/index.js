import axios from "axios";

const url_android = "http://www.mocky.io/v2/5ac4842c2f00005600f5f9fb";

import _ from "lodash";

export const getResList = () => {
  return dispatch => {
    axios
      .get(url_android)
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

export const Search = (list, key) => {
  return {
    type: "SEARCH_RESTAURENT",
    payload: {
      list,
      key
    }
  };
};

import { combineReducers } from "redux";

const InitialState = [];

const userLocation = (state = "", action) => {
  switch (action.type) {
    case "UPDATE_USER_LOCATION":
      return action.payload;

    default:
      return state;
  }
};

const restaurantList = (state = InitialState, action) => {
  switch (action.type) {
    case "RECEIVED_RESTAURENT_LIST":
      return action.payload.restaurantList;
    default:
      return state;
  }
};

export default combineReducers({
  restaurantList,
  userLocation
});

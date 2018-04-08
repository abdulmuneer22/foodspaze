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

const searchResult = (state = [], action) => {
  switch (action.type) {
    case "SEARCH_RESTAURENT":
      var mathes = [];
      var key = action.payload.key;
      var list = action.payload.list;

      list.forEach(itm => {
        if (itm.name.search(key) > 0) {
          mathes.push(itm);
        }
      });

      return mathes;

    default:
      return state;
  }
};

export default combineReducers({
  restaurantList,
  userLocation
});

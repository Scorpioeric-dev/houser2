import { createStore } from "redux";

//initial state
const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  img: "",
  rent_amount: "",
  mortgage: ""
};

//action constant
export const HANDLE_CHANGE = 'HANDLE_CHANGE'
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const UPDATE_CITY = "UPDATE_CITY";
export const UPDATE_STATE = "UPDATE_STATE";
export const UPDATE_ZIP = "UPDATE_ZIP";
export const UPDATE_IMG = "UPDATE_IMG";
export const UPDATE_RENT_AMOUNT = "UPDATE_RENT_AMOUNT";
export const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
export const CANCEL = 'CANCEL'

//reducer
function reducer(state = initialState, action) {
  const {payload} = action
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: payload };
    case UPDATE_ADDRESS:
      return { ...state, address: payload };
    case UPDATE_CITY:
      return { ...state, city: payload };
    case UPDATE_STATE:
      return { ...state, state: payload };
    case UPDATE_ZIP:
      return { ...state, zip: payload };
    case UPDATE_IMG:
      return { ...state, img: payload };
    case UPDATE_RENT_AMOUNT:
      return { ...state, rent_amount: payload };
    case UPDATE_MORTGAGE:
      return { ...state, mortgage: payload };
      case HANDLE_CHANGE:
        return {...state, img: payload}
        case CANCEL:
          return {initialState}
      default:
          return state
  }
}

//export default store
export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

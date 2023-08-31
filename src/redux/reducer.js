import { initialState } from "redux/inittialState";
import { combineReducers } from "@reduxjs/toolkit";

export const formReducer = (state=initialState.contacts, action) => {
  switch (action.type) {
    case 'addContact':
      console.log(state)
      return { ...state, contacts: [...state.contacts, action.payload] };
    case 'delAll':
      return { ...state, contacts: [] };
    case 'deleteContact':
      return { ...state, contacts: [...action.payload] };
    default:
      return state;
  }
};
const filterReducer = (state=initialState.filter, action) => {
  switch (action.type) {
    case 'chengeFilter':
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};

export const reducer=combineReducers({
contacts:formReducer,
filter:filterReducer
})

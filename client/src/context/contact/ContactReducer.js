import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRUNT,
  CLEAR_CURRENTS,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    default:
      return state;
    case ADD_CONTACT:
      return {
        ...state,
        //* we can just change contacts, state is emutable, we have to copy whats already there then add the new
        contacts: [...state.contacts, action.payload],
      };
  }
};

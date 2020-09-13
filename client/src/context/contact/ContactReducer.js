import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRUNT,
  GET_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_CURRENTS,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
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
        loading: false,
      };
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.payload
        ),
        loading: false,
      };
    case CLEAR_CONTACTS:
      return {
        ...state,
        contacts: null,
        filtered: null,
        error: null,
        current: null,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact._id === action.payload._id ? action.payload : contact
        ),
        loading: false,
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return contact.name.match(regex) || contact.email.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case SET_CURRUNT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENTS:
      return {
        ...state,
        current: null,
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
  }
};

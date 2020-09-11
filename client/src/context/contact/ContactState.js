import React, { useReducer } from "react";
import {v4 as uuid} from 'uuid'

import ContactContext from "./ContactContext";
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
import contactReducer from "./ContactReducer";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Brahim Akarouch",
        email: "brahim.akarouch@gmail.com",
        phone: "0610934578",
        type: "professional",
      },
      {
        id: 2,
        name: "Hajar Akarouch",
        email: "hajar.afhbt@gmail.com",
        phone: "0656565656",
        type: "personal",
      },
      {
        id: 3,
        name: "Fadma bifenchker",
        email: "fadam.bifenchker@gmail.com",
        phone: "0668061028",
        type: "personal",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //* Add contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //* Delete contact

  //* Set Current contact

  //* Clear Current Contact

  //* Update Current contact

  //* Filter contacts

  //* Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";

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
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //* Add contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //* Delete contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //* Set Current contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRUNT, payload: contact });
  };

  //* Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENTS });
  };

  //* Update Current contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  //* Filter contacts
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  //* Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        clearCurrent,
        setCurrent,
        updateContact,
        filtered: state.filtered,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

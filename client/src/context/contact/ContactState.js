import React, { useReducer } from "react";
import uuid from "uuid";
import contactContext from "./ContactContext";
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
} from "./types";
import contactReducer from "./ContactReducer";

const ContactState = (propos) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Brahim Akarouch",
        email: "brahim.akarouch@gmail.com",
        phone: "0610934578",
        type: "personal",
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
};
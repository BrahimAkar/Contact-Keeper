import ContactContext from "../../context/contact/ContactContext";
import React, { useContext, Fragment } from "react";
import { ContactItem } from "./ContactItem";
export const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem contact={contact} />
      ))}
    </Fragment>
  );
};

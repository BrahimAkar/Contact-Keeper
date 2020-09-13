import ContactContext from "../../context/contact/ContactContext";
import React, { useContext, Fragment, useEffect } from "react";
import Spinner from "../../components/layout/Spinner";
import { ContactItem } from "./ContactItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
export const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { getContacts, loading, contacts, filtered } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);
  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup className="todo-list">
          {filtered !== null
            ? filtered.map((contact) => (
                <CSSTransition key={contact.id} timeout={500} classNames="item">
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition key={contact.id} timeout={500} classNames="item">
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

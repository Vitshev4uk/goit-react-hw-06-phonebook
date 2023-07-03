import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import css from 'components/ContactList/ContactList.module.css'
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';

function ContactList() {

  const dispatch = useDispatch();

   const contacts = useSelector(state => state.contacts);
   console.log(contacts);

  return (
      <ul className={css.ContactList}>
        {contacts.map((contact, id) => {
          return (
            <li className={css.ContactListItem} key={id}>
              <p className={css.Name}>
                {contact.name}: {contact.number}
              </p>
              <button
                className={css.BtnSubmit}
                onClick={() => {
                  dispatch(
                    deleteContact(contact)
                  );
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
}

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ),
  onContactDelete: PropTypes.func.isRequired
}

export default ContactList;

import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

function App() {
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          margin: 15,
        }}
      >
        Phonebook
      </h1>
      <ContactForm />
      <h2
        style={{
          textAlign: 'center',
          margin: 15,
        }}
      >
        Contacts
      </h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;

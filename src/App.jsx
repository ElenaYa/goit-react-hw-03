import { useState, useEffect } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

// const userContacts = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

const localStorageContacts = () => {
  const contactsList = localStorage.getItem("contacts");

  return contactsList ? JSON.parse(contactsList) : [];
};

const App = () => {

  const [contacts, setContacts] = useState(localStorageContacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  

  const addContact = (newContact) => {
    setContacts((currentContact) => {
      return [...currentContact, newContact];
    });
  };
  const deleteContact = (userId) => {
    setContacts((currentContact) => {
      return currentContact.filter((contact) => contact.id !== userId);
    });
  };
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()
    ));

  return (
    <div>
      <h1 className='heading'>Phonebook</h1>
     
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      {contacts.length !== 0 ? (
        <ContactList contacts={filterContacts} onDelete={deleteContact} />
      ) : (
        <p className='text'>Phonebook is empty!</p>
      )
        
      }
     
    </div>

  );
};
export default App;

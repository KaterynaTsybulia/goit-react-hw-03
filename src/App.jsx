import { useState, useEffect } from 'react';
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import './App.css';


export default function App() {
   const initialState = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ];

  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialState;
  });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact  = (id) => {
    setContacts((prevContact) => prevContact.filter(contact => contact.id !== id));
  };

  const [filterContact, setFilterContact] = useState('');

  const handleFilter = (value) => {
    setFilterContact(value);
  };

  const filterContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filterContact.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContacts} />
      <SearchBox value={filterContact} onFilter={handleFilter} />
      <ContactList contacts={filterContacts} onDelete={deleteContact } />
    </div>
  );
}

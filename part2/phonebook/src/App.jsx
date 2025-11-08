import { useState, useEffect } from "react";
import contactsService from "./services/contacts";

import AddContact from "./components/AddContact";
import Contacts from "./components/Contacts";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterString, setFilterString] = useState("");

  useEffect(() => {
    contactsService.getAll().then((contacts) => setPersons(contacts));
  }, []);

  const phoneRegex = /\+?1?\s*\(?\d{3}\)?\s*\d{3}\s*\d{4}(?:\s?(?:x|ext)\.?\s?\d{1,5})?/;

  const handleNameChange = (event) => setNewName(event.target.value);
  const handlePhoneChange = (event) => setNewPhone(event.target.value);
  const handleFilterStringChange = (e) => setFilterString(e.target.value.toLowerCase());

  function addPerson(e) {
    e.preventDefault();

    if (!newName.trim()) {
      setNewName("");
      return;
    }

    if (!newPhone.trim()) {
      setNewPhone("");
      return;
    }

    if (!newPhone.match(phoneRegex)) {
      alert("check phone format");
      return;
    }

    if (persons.some((person) => person.name === newName)) {
      const existingPerson = persons.filter((person) => person.name === newName)[0];
      if (existingPerson.phone !== newPhone) {
        confirm(
          `${newName} is already added to the phonebook, update phone number with the new one?`,
        );
        contactsService
          .updateContact(existingPerson.id, {
            ...existingPerson,
            phone: newPhone,
          })
          .then((returnedPerson) =>
            setPersons(
              persons.map((person) =>
                person.id === existingPerson.id ? returnedPerson : person,
              ),
            ),
          );
        setNewName("");
        setNewPhone("");
      } else {
        alert(
          `${newName} is already in the phonebook with the same phone number, nothing to add or update.`,
        );
        setNewName("");
        setNewPhone("");
      }
      return;
    }

    const newPerson = { name: newName, phone: newPhone, id: String(persons.length + 1) };

    contactsService
      .create(newPerson)
      .then((returnedPerson) => setPersons([...persons, returnedPerson]));

    setNewName("");
    setNewPhone("");
  }

  function handleDeleteClick(id) {
    const name = persons.filter((person) => person.id === id)[0].name;
    confirm(`Delete contact ${name}?`);

    contactsService
      .deleteContact(id)
      .then((deletedContact) =>
        setPersons(persons.filter((person) => person.id !== deletedContact.id)),
      );
  }

  return (
    <main>
      <h1>phonebook</h1>
      <AddContact
        onSubmit={addPerson}
        newName={newName}
        newPhone={newPhone}
        onNameChange={handleNameChange}
        onPhoneChange={handlePhoneChange}
      />
      <Contacts
        contacts={persons}
        filterString={filterString}
        onFilterStringChange={handleFilterStringChange}
        onDeleteClick={handleDeleteClick}
      />
    </main>
  );
};

export default App;

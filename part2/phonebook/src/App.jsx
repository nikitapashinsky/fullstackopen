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
      alert(`A person with name ${newName} already exists.`);
      return;
    }

    const newPerson = { name: newName, phone: newPhone, id: String(persons.length + 1) };

    contactsService
      .create(newPerson)
      .then((returnedPerson) => setPersons([...persons, returnedPerson]));

    setNewName("");
    setNewPhone("");
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
      />
    </main>
  );
};

export default App;

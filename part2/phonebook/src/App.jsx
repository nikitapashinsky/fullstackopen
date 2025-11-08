import { useState } from "react";
import AddContact from "./components/AddContact";
import Contacts from "./components/Contacts";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "+19365331007", id: 1 },
    { name: "Ada Lovelace", phone: "+18772688722", id: 2 },
    { name: "Dan Abramov", phone: "+13365917243", id: 3 },
    { name: "Mary Poppendieck", phone: "+18433509567", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterString, setFilterString] = useState("");

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

    setPersons([...persons, { name: newName, phone: newPhone, id: persons.at(-1).id + 1 }]);
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

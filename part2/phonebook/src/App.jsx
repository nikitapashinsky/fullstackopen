import { useState } from "react";

const App = () => {
  console.clear();
  const [persons, setPersons] = useState([{ name: "Arto Hellas", phone: "+19257291478" }]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const phoneRegex = /\+?1?\s*\(?\d{3}\)?\s*\d{3}\s*\d{4}(?:\s?(?:x|ext)\.?\s?\d{1,5})?/;

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

    setPersons([...persons, { name: newName, phone: newPhone }]);
    setNewName("");
    setNewPhone("");
  }

  return (
    <div>
      {/* <div id="debug">debug: {newName}</div>*/}
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <label htmlFor="name">
          Name:
          <input
            required
            autoComplete="off"
            id="name"
            type="text"
            value={newName}
            placeholder="John Something"
            onChange={(event) => setNewName(event.target.value)}
          />
        </label>
        <label htmlFor="phone">
          Phone:
          <input
            required
            autoComplete="off"
            id="phone"
            type="tel"
            value={newPhone}
            placeholder="+13026642365"
            onChange={(event) => setNewPhone(event.target.value)}
          />
        </label>
        <button type="submit">add</button>
      </form>
      <h2>People</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            <span>{person.name}</span>
            <span>{person.phone}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

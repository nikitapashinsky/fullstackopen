import { useState } from "react";

const App = () => {
  console.clear();
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
    <div>
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
      <input
        type="text"
        placeholder="Filter by name"
        value={filterString}
        onChange={(e) => setFilterString(e.target.value.toLowerCase())}
      />
      <ul>
        {persons.map(
          (person) =>
            person.name.toLowerCase().includes(filterString) && (
              <li key={person.id}>
                <span>{person.name}</span>
                <span>{person.phone}</span>
              </li>
            ),
        )}
      </ul>
    </div>
  );
};

export default App;

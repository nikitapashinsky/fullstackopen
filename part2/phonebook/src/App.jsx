import { useState } from "react";

const App = () => {
  console.clear();
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  function addPerson(e) {
    e.preventDefault();

    if (!newName.trim()) {
      setNewName("");
      return;
    }

    if (persons.some((person) => person.name === newName)) {
      alert(`A person with name ${newName} already exists.`);
      return;
    }

    setPersons([...persons, { name: newName }]);
    setNewName("");
  }

  return (
    <div>
      {/* <div id="debug">debug: {newName}</div>*/}
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <label htmlFor="name">Name:</label>
        <input
          required
          id="name"
          type="text"
          value={newName}
          placeholder="Enter name…"
          onChange={(event) => setNewName(event.target.value)}
        />
        <button type="submit">add</button>
      </form>
      <h2>People</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  return (
    <div>
      {/* <div id="debug">debug: {newName}</div>*/}
      <h2>Phonebook</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newPersons = [...persons, { name: newName }];
          setPersons(newPersons);
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
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

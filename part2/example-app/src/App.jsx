import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log("effect");
    axios
      .get("http://localhost:3001/notes")
      .then((response) => {
        console.log("promise fulfilled");
        setNotes(response.data);
      })
      .catch((error) => {
        console.error("error: ", error);
        setNotes([{ id: 0, content: "Couldn't load notes. Please try again." }]);
      })
      .finally(console.log("finally"));
  }, []);
  console.log("render", notes.length, "notes");

  // prettier-ignore
  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    if (!newNote.trim()) {
      setNewNote("");
      return;
    }

    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    };

    setNotes(notes.concat(noteObject));
    setNewNote("");
  };

  return (
    <div>
      <h1>notes</h1>
      <button onClick={() => setShowAll(!showAll)}>show {showAll ? "important" : "all"}</button>
      <form onSubmit={addNote}>
        <input
          required
          type="text"
          placeholder="New note…"
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">add note</button>
      </form>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
};

export default App;

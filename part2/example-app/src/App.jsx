import { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll ? notes : notes.filter((note) => note.important === true);

  const handleNoteChange = (event) => {
    console.log(event.target.value);
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
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
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
    </div>
  );
};

export default App;

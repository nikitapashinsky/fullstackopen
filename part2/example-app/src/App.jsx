import { useState, useEffect } from "react";
import axios from "axios";
import noteService from "./services/notes";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    noteService.getAll().then((initialNotes) => setNotes(initialNotes));
  }, []);

  const notesToShow = showAll ? notes : notes.filter((note) => note.important === true);

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

    noteService.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNote("");
    });
  };

  const toggleImportantOf = (id) => {
    const note = notes.find((note) => note.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((returnedNote) =>
        setNotes(notes.map((note) => (note.id === id ? returnedNote : note))),
      )
      .catch((error) => {
        alert(`the note ${note.content} was already deleted from the server`);
        setNotes(notes.filter((note) => note.id !== id));
      });
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  return (
    <main>
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
          <Note key={note.id} note={note} toggleImportance={() => toggleImportantOf(note.id)} />
        ))}
      </ul>
    </main>
  );
};

export default App;

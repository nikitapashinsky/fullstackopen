import { useState, useEffect } from "react";
import noteService from "./services/notes";
import Note from "./components/Note";
import Notification from "./components/Notification";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    noteService.getAll().then((initialNotes) => setNotes(initialNotes));
  }, []);

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

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
        setNotification({
          type: "error",
          text: `the note ${note.content} was already deleted from the server`,
        });
        setTimeout(() => setNotification(null), 5000);
        setNotes(notes.filter((note) => note.id !== id));
      });
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  return (
    <main className="flex flex-col gap-3 p-6">
      <Notification message={notification} />
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-semibold tracking-tight">notes</h1>
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-1 flex h-6 items-center rounded-xs border border-neutral-600 bg-neutral-100 px-2 py-0.5 text-sm font-medium shadow-[2px_2px_0_0_rgb(0_0_0/0.1)] focus-visible:ring-3 focus-visible:ring-lime-200 focus-visible:outline-0 focus-visible:outline-neutral-900 active:translate-y-px active:bg-neutral-200 active:shadow-none"
          >
            show {showAll ? "important" : "all"}
          </button>
        </div>
        <form onSubmit={addNote} className="flex gap-2">
          <input
            required
            type="text"
            placeholder="New note…"
            value={newNote}
            onChange={handleNoteChange}
            className="flex-1 rounded-xs border border-neutral-600 px-1.5 py-0.5 text-sm placeholder-neutral-600 shadow-[inset_2px_2px_0_0_rgb(0_0_0/0.1)] focus-visible:border-neutral-900 focus-visible:ring-3 focus-visible:ring-lime-200 focus-visible:outline-0"
          />
          <button
            type="submit"
            className="rounded-xs border border-neutral-900 bg-neutral-600 px-2 py-0.5 text-sm font-medium text-white shadow-[2px_2px_0_0_rgb(0_0_0/0.1)] focus-visible:ring-3 focus-visible:ring-lime-200 focus-visible:outline-0 active:translate-y-px active:bg-neutral-700 active:shadow-none"
          >
            add note
          </button>
        </form>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportantOf(note.id)}
          />
        ))}
      </ul>
    </main>
  );
};

export default App;

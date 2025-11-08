import FlagIcon from "./icons/FlagIcon";

const Note = ({ note, toggleImportance }) => {
  return (
    <li>
      <span>{note.content}</span>
      <button
        aria-label={`Mark ${note.important ? "not important" : "important"}`}
        className={`btn-flag ${note.important && "important"}`}
        onClick={toggleImportance}
      >
        <FlagIcon isFilled={note.important} />
      </button>
    </li>
  );
};

export default Note;

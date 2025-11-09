import FlagIcon from "./icons/FlagIcon";

const Note = ({ note, toggleImportance }) => {
  return (
    <li className="flex items-center gap-3 py-0.5 hover:bg-neutral-100">
      <span className="flex-1">{note.content}</span>
      <button
        aria-label={`Mark ${note.important ? "not important" : "important"}`}
        className="flex size-6 items-center justify-center rounded-xs hover:border hover:border-neutral-600 hover:bg-neutral-200 focus-visible:border focus-visible:border-lime-800 focus-visible:ring-3 focus-visible:ring-lime-200 focus-visible:outline-0 active:translate-y-px active:bg-neutral-300 active:shadow-none"
        onClick={toggleImportance}
      >
        <FlagIcon isFilled={note.important} />
      </button>
    </li>
  );
};

export default Note;

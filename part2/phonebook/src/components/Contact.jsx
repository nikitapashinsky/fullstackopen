const Contact = ({ name, phone, onDeleteClick }) => {
  return (
    <li className="flex hover:bg-neutral-100 dark:hover:bg-neutral-800">
      <div className="flex flex-1 gap-2">
        <span>{name}</span>
        <span className="text-neutral-500 dark:text-neutral-400">{phone}</span>
      </div>
      <button
        onClick={onDeleteClick}
        className="px-2 font-medium hover:bg-red-700 hover:text-white dark:hover:bg-red-600"
      >
        delete
      </button>
    </li>
  );
};

export default Contact;

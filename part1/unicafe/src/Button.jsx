const Button = ({ id, label, onClick }) => {
  return (
    <button
      id={id}
      className="text-sm font-medium rounded-md bg-neutral-100 px-2 py-1 hover:bg-neutral-200 active:scale-95 transition ease-in-out duration-100"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

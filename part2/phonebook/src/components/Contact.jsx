const Contact = ({ name, phone, onDeleteClick }) => {
  return (
    <li>
      <div>
        <span>{name}</span>
        <span>{phone}</span>
      </div>
      <button onClick={onDeleteClick}>Delete</button>
    </li>
  );
};

export default Contact;

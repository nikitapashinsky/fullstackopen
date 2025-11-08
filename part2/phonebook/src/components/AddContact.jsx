const AddContact = ({ onSubmit, newName, onNameChange, newPhone, onPhoneChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <h2>add contact</h2>
      <label htmlFor="name">
        name
        <input
          required
          autoComplete="off"
          id="name"
          type="text"
          value={newName}
          placeholder="John Something"
          onChange={onNameChange}
        />
      </label>
      <label htmlFor="phone">
        phone
        <input
          required
          autoComplete="off"
          id="phone"
          type="tel"
          value={newPhone}
          placeholder="+13026642365"
          onChange={onPhoneChange}
        />
      </label>
      <button type="submit">add</button>
    </form>
  );
};

export default AddContact;

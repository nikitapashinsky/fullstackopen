const FilterContacts = ({ filterString, onFilterStringChange }) => {
  return (
    <input
      type="text"
      placeholder="Filter by name"
      value={filterString}
      onChange={onFilterStringChange}
    />
  );
};

export default FilterContacts;

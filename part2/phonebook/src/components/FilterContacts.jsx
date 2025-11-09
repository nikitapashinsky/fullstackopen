import cn from "../utils/cn";

const FilterContacts = ({ filterString, onFilterStringChange }) => {
  return (
    <input
      type="text"
      placeholder="Filter by name"
      value={filterString}
      onChange={onFilterStringChange}
      className={cn(
        "bg-neutral-100 outline-0 focus-visible:bg-neutral-200 focus-visible:shadow-[inset_0_-1px_0_0_black] dark:bg-neutral-900 dark:focus-visible:bg-neutral-800 dark:focus-visible:shadow-[inset_0_-1px_0_0_white]",
      )}
    />
  );
};

export default FilterContacts;

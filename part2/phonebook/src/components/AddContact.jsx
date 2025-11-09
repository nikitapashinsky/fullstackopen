import cn from "../utils/cn";

const AddContact = ({
  onSubmit,
  newName,
  onNameChange,
  newPhone,
  onPhoneChange,
}) => {
  return (
    <div className="flex flex-col gap-2 py-4">
      <h2 className="text-xl font-medium">add contact</h2>
      <form onSubmit={onSubmit} className="flex items-end gap-3">
        <label htmlFor="name" className="flex min-w-0 flex-col gap-1">
          <span className="font-medium">name</span>
          <input
            required
            autoComplete="off"
            id="name"
            type="text"
            value={newName}
            placeholder="John Something"
            onChange={onNameChange}
            className={cn(
              "bg-neutral-100 outline-0 focus-visible:bg-neutral-200 focus-visible:shadow-[inset_0_-1px_0_0_black] dark:bg-neutral-900 dark:focus-visible:bg-neutral-800 dark:focus-visible:shadow-[inset_0_-1px_0_0_white]",
            )}
          />
        </label>
        <label htmlFor="phone" className="flex min-w-0 flex-col gap-1">
          <span className="font-medium">phone</span>
          <input
            required
            autoComplete="off"
            id="phone"
            type="tel"
            value={newPhone}
            placeholder="+13026642365"
            onChange={onPhoneChange}
            className={cn(
              "bg-neutral-100 outline-0 focus-visible:bg-neutral-200 focus-visible:shadow-[inset_0_-1px_0_0_black] dark:bg-neutral-900 dark:focus-visible:bg-neutral-800 dark:focus-visible:shadow-[inset_0_-1px_0_0_white]",
            )}
          />
        </label>
        <button
          type="submit"
          className={cn(
            "flex items-center bg-neutral-950 px-3 font-medium text-white dark:bg-neutral-50 dark:text-black",
          )}
        >
          add
        </button>
      </form>
    </div>
  );
};

export default AddContact;

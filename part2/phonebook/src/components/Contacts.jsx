import Contact from "./Contact";
import FilterContacts from "./FilterContacts";

const Contacts = ({
  contacts,
  filterString,
  onFilterStringChange,
  onDeleteClick,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-medium">contacts</h2>
      <FilterContacts
        filterString={filterString}
        onFilterStringChange={onFilterStringChange}
      />
      <ul>
        {contacts.map(
          (contact) =>
            contact.name.toLowerCase().includes(filterString) && (
              <Contact
                key={contact.id}
                name={contact.name}
                phone={contact.phone}
                onDeleteClick={() => onDeleteClick(contact.id)}
              />
            ),
        )}
      </ul>
    </div>
  );
};

export default Contacts;

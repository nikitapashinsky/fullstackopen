import Contact from "./Contact";
import FilterContacts from "./FilterContacts";

const Contacts = ({ contacts, filterString, onFilterStringChange }) => {
  return (
    <div id="contacts">
      <h2>contacts</h2>
      <FilterContacts filterString={filterString} onFilterStringChange={onFilterStringChange} />
      <ul>
        {contacts.map(
          (contact) =>
            contact.name.toLowerCase().includes(filterString) && (
              <Contact key={contact.id} name={contact.name} phone={contact.phone} />
            ),
        )}
      </ul>
    </div>
  );
};

export default Contacts;

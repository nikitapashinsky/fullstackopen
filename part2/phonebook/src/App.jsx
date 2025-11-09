import { useState, useEffect } from "react";
import contactsService from "./services/contacts";

import AddContact from "./components/AddContact";
import Contacts from "./components/Contacts";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterString, setFilterString] = useState("");
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    contactsService.getAll().then((contacts) => setPersons(contacts));
  }, []);

  const phoneRegex =
    /\+?1?\s*\(?\d{3}\)?\s*\d{3}\s*\d{4}(?:\s?(?:x|ext)\.?\s?\d{1,5})?/;

  const handleNameChange = (event) => setNewName(event.target.value);
  const handlePhoneChange = (event) => setNewPhone(event.target.value);
  const handleFilterStringChange = (e) =>
    setFilterString(e.target.value.toLowerCase());

  function addPerson(e) {
    e.preventDefault();

    if (!newName.trim()) {
      setNewName("");
      return;
    }

    if (!newPhone.trim()) {
      setNewPhone("");
      return;
    }

    if (!newPhone.match(phoneRegex)) {
      alert("check phone format");
      return;
    }

    if (persons.some((person) => person.name === newName)) {
      const existingPerson = persons.filter(
        (person) => person.name === newName,
      )[0];
      if (existingPerson.phone !== newPhone) {
        if (
          confirm(
            `${newName} is already added to the phonebook, update phone number with the new one?`,
          )
        ) {
          contactsService
            .updateContact(existingPerson.id, {
              ...existingPerson,
              phone: newPhone,
            })
            .then((returnedPerson) => {
              setNotification({
                type: "success",
                text: `Updated phone number for ${newName}.`,
              });
              setTimeout(() => setNotification(null), 3000);

              setPersons(
                persons.map((p) =>
                  p.id === existingPerson.id ? returnedPerson : p,
                ),
              );
            })
            .catch((error) => {
              setNotification({
                type: "error",
                text: `contact ${newName} not found on server`,
              });
              setTimeout(() => setNotification(null), 3000);

              setPersons(persons.filter((p) => p.id !== existingPerson.id));
            });
          setNewName("");
          setNewPhone("");
        } else {
          return;
        }
      } else {
        alert(
          `${newName} is already in the phonebook with the same phone number, nothing to add or update.`,
        );
      }
      return;
    }

    const newPerson = {
      name: newName,
      phone: newPhone,
      id: String(Math.max(...persons.map((p) => Number(p.id)), 0) + 1),
    };

    contactsService.create(newPerson).then((returnedPerson) => {
      setNotification({
        type: "success",
        text: `Added ${newName} to the phonebook`,
      });
      setTimeout(() => setNotification(null), 3000);
      setPersons([...persons, returnedPerson]);
    });

    setNewName("");
    setNewPhone("");
  }

  function handleDeleteClick(id) {
    const name = persons.filter((person) => person.id === id)[0].name;
    if (confirm(`Delete contact ${name}?`)) {
      contactsService
        .deleteContact(id)
        .then((deletedContact) =>
          setPersons(
            persons.filter((person) => person.id !== deletedContact.id),
          ),
        );
    } else {
      return;
    }
  }

  return (
    <main className="mx-auto max-w-sm p-3">
      {notification && <Notification message={notification} />}
      <h1 className="text-2xl font-semibold tracking-tight">phonebook</h1>
      <AddContact
        onSubmit={addPerson}
        newName={newName}
        newPhone={newPhone}
        onNameChange={handleNameChange}
        onPhoneChange={handlePhoneChange}
      />
      <Contacts
        contacts={persons}
        filterString={filterString}
        onFilterStringChange={handleFilterStringChange}
        onDeleteClick={handleDeleteClick}
      />
    </main>
  );
};

export default App;

import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

async function getAll() {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
}

async function create(newContact) {
  const request = axios.post(baseUrl, newContact);
  return request.then((response) => response.data);
}

async function deleteContact(contactId) {
  const request = axios.delete(`${baseUrl}/${contactId}`, contactId);
  return request.then((response) => response.data);
}

async function updateContact(contactId, newContact) {
  const request = axios.put(`${baseUrl}/${contactId}`, newContact);
  return request.then((response) => response.data);
}

export default { getAll, create, deleteContact, updateContact };

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

export default { getAll, create };

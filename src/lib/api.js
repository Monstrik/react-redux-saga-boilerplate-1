import axios from 'axios';


export async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
}

export async function getUsers2() {
  return axios.get('https://jsonplaceholder.typicode.com/users');
}

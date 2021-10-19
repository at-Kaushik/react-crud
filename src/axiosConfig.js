import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

// we can do more setup work here...

export default instance;
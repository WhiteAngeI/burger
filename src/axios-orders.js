import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://the-react-d7983-default-rtdb.firebaseio.com/'
});

export default instance;
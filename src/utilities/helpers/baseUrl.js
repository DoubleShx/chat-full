import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:3004';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default axios;
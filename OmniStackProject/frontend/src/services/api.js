import axios from 'axios';

const Api = axios.create({
	baseURL: 'http://localhost:3000',
	timeout: 15000
});

export default Api;

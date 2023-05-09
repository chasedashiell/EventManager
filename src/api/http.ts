import axios, { AxiosInstance } from 'axios';

// Change this
const baseURL = 'http://localhost:3001/api';

const http: AxiosInstance = axios.create({
	baseURL: baseURL,
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true,
	timeout: 20000,
});

export default http;
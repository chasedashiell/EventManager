import axios, { AxiosInstance } from 'axios';

// Change this
const baseURL = 'http://10.114.220.218:5000';

const http: AxiosInstance = axios.create({
	baseURL: baseURL,
	headers: { 'Content-Type': 'application/json' },
	// withCredentials: true,
	timeout: 20000,
});

export default http;
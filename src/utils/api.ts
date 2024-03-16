import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL as string,
    timeout: 70000,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
});
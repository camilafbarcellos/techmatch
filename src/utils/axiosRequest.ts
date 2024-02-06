import axios, { AxiosRequestConfig } from 'axios';

interface AxiosRequestProps {
    endpoint: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: any;
    token?: string;
}

export const axiosRequest = async ({ endpoint, method, body, token }: AxiosRequestProps) => {
    try {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json; charset=utf-8',
            Accept: '*/*',
        };

        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }

        const API_URL: string = process.env.REACT_APP_API_URL as string;

        const config: AxiosRequestConfig = {
            method,
            url: `${API_URL}${endpoint}`,
            data: body,
            headers,
        };

        const response = await axios(config);
        const data = response.data;
        const status = response.status;

        return { response, data, status };
    } catch (error: any) {
        console.log(error);

        return { error, code: error.code };
    }
};

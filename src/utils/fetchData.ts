import { axiosRequest } from './axiosRequest';

// Function to fetch questions data from the API
export const fetchData = async () => {
    try {
        const { data } = await axiosRequest({ endpoint: 'questions', method: 'GET' });
        return data;
    } catch (error) {
        // TO-DO: Handle the error appropriately
        console.error('Error fetching questions:', error);
        return null;
    }
};
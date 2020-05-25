import * as axios from 'axios';

const BASE_CONNECTION = axios.create({
    baseURL: 'https://test-task-6a600.firebaseio.com',
})

export const api = {
    postNewEvent: data =>  BASE_CONNECTION.post('/events.json', data),
    getEvents: () => BASE_CONNECTION.get('/events.json'),
};


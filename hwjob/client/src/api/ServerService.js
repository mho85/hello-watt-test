import axios from 'axios';

/**
 * Creates a service allowing the front-end to communicate with back-end APIs.
 */
export default axios.create({
    baseURL: 'http://localhost:8000/api'
});
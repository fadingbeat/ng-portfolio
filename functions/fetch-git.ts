import { Handler } from '@netlify/functions';
import axios from 'axios';

require('dotenv').config();

export const handler: Handler = async (event, context) => {
    const API_SECRET = process.env.API_SECRET;
    const url = `https://api.github.com/users/fadingbeat/repos?access_key=${API_SECRET}`;

    try {
        const { data } = await axios.get(url);
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        const { status, statusText, headers, data } = error.response;
        return {
            statusCode: status,
            body: JSON.stringify({ status, statusText, headers, data }),
        };
    }
};

import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
    providedIn: 'root',
})
export class WorkService {
    constructor() {}

    handler = async () => {
        const url = '.netlify/functions/fetch-git';
        try {
            const { data } = await axios.get(url);
            return data;
        } catch (error) {
            const { status, statusText, headers, data } = error.response;
            return {
                statusCode: status,
                body: JSON.stringify({ status, statusText, headers, data }),
            };
        }
    };
}

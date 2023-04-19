import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
    providedIn: 'root',
})
export class PhotographyService {
    getShutterstock = async () => {
        const url = '.netlify/functions/fetch-shutterstock';
        try {
            const { data } = await axios.get(url);
            console.log('data', data);
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

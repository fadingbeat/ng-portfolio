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
    getCollectionData = async () => {
        const url = '.netlify/functions/fetch-collections';
        try {
            // data staviti da je class based
            const { data } = await axios.get(url);
            // for each item in data send a get request to a netlify function url (that sends get to image/{id} API)
            return data;
        } catch (error) {
            const { status, statusText, headers, data } = error.response;
            return {
                statusCode: status,
                body: JSON.stringify({ status, statusText, headers, data }),
            };
        }
    };

    getImagesData = async (imgId: string) => {
        const url = '.netlify/functions/fetch-images';
    };
}

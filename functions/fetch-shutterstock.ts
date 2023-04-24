import { NoDataRowOutlet } from '@angular/cdk/table';
import axios from 'axios';

require('dotenv').config();

export const handler = async () => {
    console.log('Before the call to API');
    const contributorId = process.env.CONTRIBUTOR_ID;
    const collectionId = process.env.COLLECTION_ID;
    const url = `https://api.shutterstock.com/v2/contributors/${contributorId}`;
    let data;
    try {
        data = await axios.get(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.SS_SECRET}`,
                'User-Agent': 'NODE_JS',
            },
        });
        return {
            statusCode: 200,
            body: JSON.stringify({ data: data.data }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: error.message,
            }),
        };
    }
};

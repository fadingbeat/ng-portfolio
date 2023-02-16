import { Injectable } from '@angular/core';
import { octokit } from 'environments/env';

@Injectable({
    providedIn: 'root',
})
export class WorkService {
    constructor() {}

    async getRepositories() {
        const repo = await octokit.request('GET /users/{username}/repos', {
            username: 'fadingbeat',
        });
        return repo;
    }
}

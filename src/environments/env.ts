import { Octokit } from 'octokit';
import { config } from 'config';

const GIT_KEY = config.API_KEY;

export const octokit = new Octokit({
    auth: GIT_KEY,
});

// await octokit.rest.users.getAuthenticated();

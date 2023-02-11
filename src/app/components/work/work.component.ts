import { Component, OnInit } from '@angular/core';
import { octokit } from 'environments/env';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
    repositories: [] = [];
    projects = [
        {
            url: 'https://www.missionautomate.com',
            img: 'assets/projects/ProjectMA.jpg',
            alt: 'Mission Automate project',
        },
        {
            url: 'https://www.forest-creations.com',
            img: 'assets/projects/ProjectFC1.PNG',
            alt: 'Forest Creations project',
        },
        {
            url: 'https://objection.co/',
            img: 'assets/projects/ProjectOBJ.png',
            alt: 'ObjectionCo project',
        },
        {
            url: 'https://github.com/fadingbeat/css-wonders',
            img: 'assets/projects/ProjectPortfolio.PNG',
            alt: 'CSS wonders projects',
        },
    ];
    constructor() {}

    ngOnInit() {
        this.sendReq();
    }

    async sendReq() {
        const repo = await octokit.request(
            'GET /users/{username}/repos{?type,sort,direction,per_page,page}',
            {
                username: 'fadingbeat',
            }
        );
        console.log(repo.data);
        this.repositories = repo.data;
    }
}

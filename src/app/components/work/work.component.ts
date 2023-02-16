import { WorkService } from './../../services/work.service';
import { Component, OnInit } from '@angular/core';
import { octokit } from 'environments/env';
import { throwError } from 'rxjs';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
    repositories = [] as any;
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

    constructor(private workService: WorkService) {}

    ngOnInit() {
        this.displayRepoList();
    }

    displayRepoList() {
        this.workService.getRepositories().then(
            (res) => {
                this.repositories = res.data;
                console.log(res);
            },
            (err) => {
                console.log('failed', err);
            }
        );
    }
}

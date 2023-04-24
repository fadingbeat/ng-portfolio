import { PhotographyService } from './../../services/photography.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-photography',
    templateUrl: './photography.component.html',
    styleUrls: ['./photography.component.scss'],
})
export class PhotographyComponent implements OnInit {
    contributor = [] as any;
    collections = [] as any;

    constructor(private photographyService: PhotographyService) {}

    ngOnInit() {
        this.displayContributor();
        this.getCollections();
    }

    displayContributor() {
        this.photographyService.getShutterstock().then(
            (res) => {
                console.log('komponenta', res);
                this.contributor = res;
            },
            (err) => {
                console.log('failed', err);
            }
        );
    }

    getCollections() {
        this.photographyService.getCollectionData().then(
            (res) => {
                console.log('collections', res);
                this.collections = res;
            },
            (err) => {
                console.log('failed', err);
            }
        );
    }
}

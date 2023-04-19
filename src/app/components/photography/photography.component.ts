import { PhotographyService } from './../../services/photography.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-photography',
    templateUrl: './photography.component.html',
    styleUrls: ['./photography.component.scss'],
})
export class PhotographyComponent implements OnInit {
    collections = [] as any;

    constructor(private photographyService: PhotographyService) {}

    ngOnInit() {
        this.displayCollections();
    }

    displayCollections() {
        this.photographyService.getShutterstock().then(
            (res) => {
                console.log('komponenta', res);
                this.collections = res;
            },
            (err) => {
                console.log('failed', err);
            }
        );
    }
}

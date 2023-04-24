import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotographyComponent } from './components/photography/photography.component';
import { WorkComponent } from './components/work/work.component';

const routes: Routes = [
    {
        path: '',
        component: WorkComponent,
    },
    {
        path: 'photography',
        component: PhotographyComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

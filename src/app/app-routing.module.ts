import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from './components/work/work.component';

const routes: Routes = [
    {
        path: 'work',
        component: WorkComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

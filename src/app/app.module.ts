import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalErrorHandler } from './core/global-error-handler';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './components/work/work.component';
import { ErrorDialogService } from './shared/errors/error-dialog.service';
import { PhotographyComponent } from './components/photography/photography.component';

@NgModule({
    declarations: [AppComponent, WorkComponent, PhotographyComponent],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
    ],
    providers: [
        ErrorDialogService,
        {
            provide: ErrorHandler,
            useClass: GlobalErrorHandler,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

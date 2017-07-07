import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StopwatchComponent } from './components/stopwatch/stopwatch.component';
import { AppComponent } from './components/app/app.component';

@NgModule({
    declarations: [
        AppComponent,
        StopwatchComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class ApphModule {
}

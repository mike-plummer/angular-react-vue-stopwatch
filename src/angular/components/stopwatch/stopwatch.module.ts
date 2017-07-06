import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StopwatchComponent } from './stopwatch.component';

@NgModule({
    declarations: [
        StopwatchComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [ StopwatchComponent ]
})
export class StopwatchModule {
}

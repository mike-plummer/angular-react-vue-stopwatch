import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import './polyfills';

import { StopwatchModule } from './components/stopwatch/stopwatch.module';

platformBrowserDynamic().bootstrapModule(StopwatchModule);

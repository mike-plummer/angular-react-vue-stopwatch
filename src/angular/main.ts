import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import './polyfills';

import { ApphModule } from './app.module';

platformBrowserDynamic().bootstrapModule(ApphModule);

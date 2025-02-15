import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//this will run the module with all the componenets. 
platformBrowserDynamic().bootstrapModule(AppModule)
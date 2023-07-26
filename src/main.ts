import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from 'app/app.module';

// declare global {
//     interface Window { global: any; }
//   }
//   window.global = window;
  
platformBrowserDynamic().bootstrapModule(AppModule)
                        .catch(err => console.error(err));

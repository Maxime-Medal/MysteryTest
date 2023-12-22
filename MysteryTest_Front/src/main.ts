import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module'; // plus d'utilisé en standalone
import { AppComponent } from './app/app.component';


platformBrowserDynamic()
  .bootstrapModule(AppComponent)
  .catch(err => console.error(err));

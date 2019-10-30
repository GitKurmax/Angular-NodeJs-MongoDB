import { enableProdMode } from '@angular/core';

import { environment } from './app/environments/environment';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
export { ngExpressEngine } from "@nguniversal/express-engine";
export { provideModuleMap } from "@nguniversal/module-map-ngfactory-loader";

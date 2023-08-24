import { Application } from '@ditsmod/core';

import { AppModule } from './app/app.module';
import { checkCliAndSetPort } from './app/utils/check-cli-and-set-port';

new Application().bootstrap(AppModule).then((app) => {
  const port = checkCliAndSetPort(3000);
  app.server.listen(port, 'localhost');
});

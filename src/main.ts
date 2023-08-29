import { Application } from '@ditsmod/core';

import { AppModule } from './app/app.module.js';
import { checkCliAndSetPort } from './app/utils/check-cli-and-set-port.js';

const app = await new Application().bootstrap(AppModule);
const port = checkCliAndSetPort(3000);
app.server.listen(port, 'localhost');

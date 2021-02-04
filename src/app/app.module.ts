import * as http from 'http';
import { BodyParser, RootModule } from '@ts-stack/ditsmod';

import { HelloWorldModule } from './modules/routed/hello-world/hello-world.module';

/**
 * Any one of these options are optional.
 */
@RootModule({
  httpModule: http,
  serverName: 'Node.js',
  serverOptions: {},
  listenOptions: { port: 8080, host: 'localhost' },
  prefixPerApp: '',
  imports: [HelloWorldModule],
  exports: [],
  controllers: [],
  providersPerApp: [],
  providersPerMod: [],
  providersPerReq: [BodyParser],
})
export class AppModule {}

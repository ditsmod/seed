import * as http from 'http';
import { BodyParser, RootModule, Router } from '@ts-stack/ditsmod';
import { DefaultBodyParser } from '@ts-stack/body-parser';
import { DefaultRouter } from '@ts-stack/router';

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
  exports: [{ provide: BodyParser, useClass: DefaultBodyParser }],
  controllers: [],
  providersPerApp: [{ provide: Router, useClass: DefaultRouter }],
  providersPerMod: [],
  providersPerReq: [BodyParser],
})
export class AppModule {}

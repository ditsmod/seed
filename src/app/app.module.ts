import * as http from 'http';
import { RootModule, Logger } from '@ts-stack/ditsmod';

import { HelloWorldModule } from './modules/routed/hello-world/hello-world.module';
import { LoggerService } from './services-per-app/logger.service';

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
  providersPerApp: [{ provide: Logger, useClass: LoggerService }],
  providersPerMod: [],
  providersPerReq: [],
})
export class AppModule {}

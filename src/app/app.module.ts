import * as http from 'http';
import { RootModule, Logger, ControllerErrorHandler } from '@ts-stack/ditsmod';

import { HelloWorldModule } from './modules/routed/hello-world/hello-world.module';
import { LoggerService } from './services-per-app/logger.service';
import { ErrorHandler } from './services-per-app/error-handler';

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
  exports: [{ provide: ControllerErrorHandler, useClass: ErrorHandler }],
  controllers: [],
  providersPerApp: [{ provide: Logger, useClass: LoggerService }],
  providersPerMod: [],
  providersPerReq: [ControllerErrorHandler],
})
export class AppModule {}

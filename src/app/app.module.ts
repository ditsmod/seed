import * as http from 'http';
import { Logger, LoggerConfig, RootModule } from '@ditsmod/core';
import { JwtModule } from '@ditsmod/jwt';

import { HelloWorldModule } from './modules/routed/hello-world/hello-world.module';
import { DefaultsModule } from './modules/services/defaults/defaults.module';
import { openapiModuleWithParams } from './modules/services/openapi/openapi.module';
import { getPort } from './utils/get-port';

const loggerConfig = new LoggerConfig('info');
const jwtModuleWithParams = JwtModule.withParams({ secret: 'chortisho' });

/**
 * Any one of these options are optional.
 */
@RootModule({
  httpModule: http,
  serverName: 'Node.js',
  serverOptions: {},
  // Here works the application and serve OpenAPI documentation.
  listenOptions: { host: 'localhost', port: getPort(3000) },
  path: '',
  imports: [
    DefaultsModule,
    jwtModuleWithParams,
    openapiModuleWithParams,
    { path: '', module: HelloWorldModule },
  ],
  controllers: [],
  providersPerApp: [{ provide: LoggerConfig, useValue: loggerConfig }],
  providersPerMod: [],
  providersPerRou: [],
  providersPerReq: [],
  resolvedCollisionsPerApp: [],
  resolvedCollisionsPerMod: [],
  resolvedCollisionsPerRou: [],
  resolvedCollisionsPerReq: [],
  exports: [DefaultsModule, openapiModuleWithParams, jwtModuleWithParams],
  extensions: [],
  extensionsMeta: {},
})
export class AppModule {}

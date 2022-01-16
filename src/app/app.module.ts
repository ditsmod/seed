import * as http from 'http';
import { Logger, LoggerConfig, RootModule } from '@ditsmod/core';
import { JwtModule } from '@ditsmod/jwt';

import { HelloWorldModule } from './modules/routed/hello-world/hello-world.module';
import { DefaultsModule } from './modules/services/defaults/defaults.module';
import { openapiModuleWithParams } from './modules/services/openapi/openapi.module';

const loggerConfig = new LoggerConfig();
const level: keyof Logger = 'info';
loggerConfig.level = level;

const jwtModuleWithParams = JwtModule.withParams({ secret: 'chortisho' });

/**
 * Any one of these options are optional.
 */
@RootModule({
  httpModule: http,
  serverName: 'Node.js',
  serverOptions: {},
  // Here works the application and serve OpenAPI documentation.
  listenOptions: { host: 'localhost', port: 3000 },
  prefixPerApp: '',
  imports: [DefaultsModule, HelloWorldModule, openapiModuleWithParams, jwtModuleWithParams],
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

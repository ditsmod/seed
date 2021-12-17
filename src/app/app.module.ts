import * as http from 'http';
import { RootModule } from '@ditsmod/core';
import { JwtModule } from '@ditsmod/jwt';

import { HelloWorldModule } from './modules/routed/hello-world/hello-world.module';
import { DefaultsModule } from './modules/services/defaults/defaults.module';
import { openapiModuleWithParams } from './modules/services/openapi/openapi.module';

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
  imports: [HelloWorldModule, openapiModuleWithParams],
  controllers: [],
  providersPerApp: [],
  providersPerMod: [],
  providersPerRou: [],
  providersPerReq: [],
  resolvedCollisionsPerApp: [],
  resolvedCollisionsPerMod: [],
  resolvedCollisionsPerRou: [],
  resolvedCollisionsPerReq: [],
  exports: [DefaultsModule, openapiModuleWithParams, JwtModule.withParams({ secret: 'chortisho' })],
  extensions: [],
  extensionsMeta: {},
})
export class AppModule {}

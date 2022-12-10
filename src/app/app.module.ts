import * as http from 'http';
import { Providers, RootModule } from '@ditsmod/core';
import { RouterModule } from '@ditsmod/router';
import { JwtModule } from '@ditsmod/jwt';
import { BodyParserModule } from '@ditsmod/body-parser';

import { HelloWorldModule } from './modules/routed/hello-world/hello-world.module';
import { openapiModuleWithParams } from './modules/services/openapi/openapi.module';
import { getPort } from './utils/get-port';

const jwtModuleWithParams = JwtModule.withParams({ secret: 'chortisho' });

/**
 * Any one of these options are optional.
 */
@RootModule({
  httpModule: http,
  serverOptions: {},
  // Here works the application and serve OpenAPI documentation.
  listenOptions: { host: 'localhost', port: getPort(3000) },
  path: '',
  appends: [HelloWorldModule],
  imports: [
    RouterModule,
    BodyParserModule,
    jwtModuleWithParams,
    openapiModuleWithParams
  ],
  controllers: [],
  providersPerApp: [...new Providers().useLogConfig({ level: 'debug' }, { tags: ['route'] })],
  providersPerMod: [],
  providersPerRou: [],
  providersPerReq: [],
  resolvedCollisionsPerApp: [],
  resolvedCollisionsPerMod: [],
  resolvedCollisionsPerRou: [],
  resolvedCollisionsPerReq: [],
  exports: [BodyParserModule, openapiModuleWithParams, jwtModuleWithParams],
  extensions: [],
  extensionsMeta: {},
})
export class AppModule {}

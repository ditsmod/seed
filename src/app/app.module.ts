import * as http from 'http';
import { RootModule } from '@ditsmod/core';
import { XOasObject } from '@ts-stack/openapi-spec';
import { ServiceProvider } from '@ditsmod/core';
import { OAS_OBJECT, OpenapiModule } from '@ditsmod/openapi';

import { HelloWorldModule } from './modules/routed/hello-world/hello-world.module';
import { DefaultsModule } from './modules/services/defaults/defaults.module';

const oasObject: XOasObject = { openapi: '3.0.0', info: { title: 'Testing @ditsmod/openapi', version: '1.0.0' } };
const providersPerApp: ServiceProvider[] = [{ provide: OAS_OBJECT, useValue: oasObject }];
const openapiModuleWithParams = OpenapiModule.withParams(providersPerApp);

/**
 * Any one of these options are optional.
 */
@RootModule({
  httpModule: http,
  serverName: 'Node.js',
  serverOptions: {},
  listenOptions: { port: 8080, host: 'localhost' },
  prefixPerApp: '',
  imports: [HelloWorldModule, openapiModuleWithParams],
  exports: [DefaultsModule, openapiModuleWithParams],
  controllers: [],
  providersPerApp: [],
  providersPerMod: [],
  providersPerReq: [],
})
export class AppModule {}

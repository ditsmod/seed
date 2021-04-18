import { Module } from '@ditsmod/core';
import { XOasObject } from '@ts-stack/openapi-spec';
import { ServiceProvider } from '@ditsmod/core';
import { OAS_OBJECT, OpenapiModule } from '@ditsmod/openapi';

import { HelloWorldController } from './hello-world.controller';

const oasObject: XOasObject = { openapi: '3.0.0', info: { title: 'Testing @ditsmod/openapi', version: '1.0.0' } };
const providersPerApp: ServiceProvider[] = [{ provide: OAS_OBJECT, useValue: oasObject }];
const openapiModuleWithParams = OpenapiModule.withParams(providersPerApp);

@Module({
  imports: [openapiModuleWithParams],
  exports: [openapiModuleWithParams],
  controllers: [HelloWorldController],
})
export class HelloWorldModule {}

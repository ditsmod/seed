import { Providers, rootModule } from '@ditsmod/core';
import { RoutingModule } from '@ditsmod/routing';
import { BodyParserModule } from '@ditsmod/body-parser';

import { HelloWorldModule } from './modules/routed/hello-world/hello-world.module.js';

@rootModule({
  appends: [HelloWorldModule],
  imports: [RoutingModule, BodyParserModule],
  controllers: [],
  providersPerApp: [...new Providers().useLogConfig({ level: 'info' })],
  providersPerMod: [],
  providersPerRou: [],
  providersPerReq: [],
  resolvedCollisionsPerApp: [],
  resolvedCollisionsPerMod: [],
  resolvedCollisionsPerRou: [],
  resolvedCollisionsPerReq: [],
  exports: [RoutingModule, BodyParserModule],
  extensions: [],
  extensionsMeta: {},
})
export class AppModule {}

import { Providers, rootModule } from '@ditsmod/core';
import { RoutingModule } from '@ditsmod/routing';
import { BodyParserConfig, BodyParserModule } from '@ditsmod/body-parser';

import { HelloWorldModule } from './modules/routed/hello-world/hello-world.module.js';

@rootModule({
  providersPerApp: new Providers()
    .useLogConfig({ level: 'debug' })
    .useValue<BodyParserConfig>(BodyParserConfig, {
      jsonOptions: { limit: '100kb' },
      urlencodedOptions: { extended: true },
    }),
  appends: [HelloWorldModule],
  imports: [RoutingModule, BodyParserModule],
  exports: [RoutingModule, BodyParserModule],
})
export class AppModule {}

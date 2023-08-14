import * as http from 'http';
import { Providers, rootModule } from '@ditsmod/core';
import { RouterModule } from '@ditsmod/router';
import { BodyParserModule } from '@ditsmod/body-parser';

import { HelloWorldModule } from './modules/routed/hello-world/hello-world.module';
import { checkCliAndSetPort } from './utils/check-cli-and-set-port';

@rootModule({
  httpModule: http,
  serverOptions: {},
  listenOptions: { host: 'localhost', port: checkCliAndSetPort(3000) },
  path: '',
  appends: [HelloWorldModule],
  imports: [RouterModule, BodyParserModule],
  controllers: [],
  providersPerApp: [...new Providers().useLogConfig({ level: 'info' }, { tags: ['route'] })],
  providersPerMod: [],
  providersPerRou: [],
  providersPerReq: [],
  resolvedCollisionsPerApp: [],
  resolvedCollisionsPerMod: [],
  resolvedCollisionsPerRou: [],
  resolvedCollisionsPerReq: [],
  exports: [BodyParserModule],
  extensions: [],
  extensionsMeta: {},
})
export class AppModule {}

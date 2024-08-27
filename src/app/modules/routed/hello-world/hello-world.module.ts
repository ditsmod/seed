import { featureModule } from '@ditsmod/core';

import { DefaultController } from './default.controller.js';
import { SingletonController } from './singleton.controller.js';
import { SomeService } from './some.service.js';

@featureModule({
  controllers: [DefaultController, SingletonController],
  providersPerMod: [SomeService], // For SingletonController
  providersPerReq: [SomeService], // For DefaultController
})
export class HelloWorldModule {}

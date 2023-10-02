import { featureModule } from '@ditsmod/core';

import { HelloWorldController, SingletonHelloWorldController } from './hello-world.controller.js';

@featureModule({ controllers: [HelloWorldController, SingletonHelloWorldController] })
export class HelloWorldModule {}

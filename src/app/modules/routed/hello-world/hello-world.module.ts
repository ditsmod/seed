import { featureModule } from '@ditsmod/core';

import { HelloWorldController } from './hello-world.controller.js';

@featureModule({ controllers: [HelloWorldController] })
export class HelloWorldModule {}

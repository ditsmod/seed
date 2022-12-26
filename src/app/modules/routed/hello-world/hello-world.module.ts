import { featureModule } from '@ditsmod/core';

import { HelloWorldController } from './hello-world.controller';

@featureModule({ controllers: [HelloWorldController] })
export class HelloWorldModule {}

import { Module } from '@ditsmod/core';

import { HelloWorldController } from './hello-world.controller';

@Module({
  controllers: [HelloWorldController],
})
export class HelloWorldModule {}

import { Module } from '@ditsmod/core';
import { RouterModule } from '@ditsmod/router';
import { BodyParserModule } from '@ditsmod/body-parser';

@Module({
  imports: [BodyParserModule, RouterModule],
  exports: [BodyParserModule]
})
export class DefaultsModule {}
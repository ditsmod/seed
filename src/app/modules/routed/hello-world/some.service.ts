import { injectable } from '@ditsmod/core';

@injectable()
export class SomeService {
  getMsg() {
    return 'Hello World!';
  }
}

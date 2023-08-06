import { HTTP_BODY } from '@ditsmod/body-parser';
import { controller, inject, Res, route } from '@ditsmod/core';

@controller()
export class HelloWorldController {
  constructor(private res: Res) {}

  @route('GET')
  tellHello() {
    this.res.send('Hello World!');
  }

  @route('POST')
  postHello(@inject(HTTP_BODY) body: any) {
    this.res.sendJson(body);
  }

  @route('GET', 'throw-error')
  thrwoError() {
    throw new Error('Here some error occurred');
  }
}

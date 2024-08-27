import { HTTP_BODY } from '@ditsmod/body-parser';
import { controller, inject, Res, route } from '@ditsmod/core';

import { SomeService } from './some.service.js';

@controller()
export class DefaultController {
  @route('GET', 'hello')
  tellHello(res: Res, someService: SomeService) {
    const msg = someService.getMsg();
    res.send(msg);
  }

  @route('POST', 'body')
  postHello(res: Res, @inject(HTTP_BODY) body: any) {
    res.sendJson(body);
  }

  @route('GET', 'throw-error')
  thrwoError() {
    throw new Error('Here some error occurred');
  }
}

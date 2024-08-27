import { controller, RequestContext, route, SingletonRequestContext } from '@ditsmod/core';
import { SomeService } from './some.service.js';

@controller({ isSingleton: true })
export class SingletonController {
  constructor(private someService: SomeService) {}

  @route('GET', 'hello2')
  tellHello(ctx: RequestContext) {
    const msg = this.someService.getMsg();
    ctx.send(msg);
  }

  @route('POST', 'body2')
  postHello(ctx: SingletonRequestContext) {
    ctx.sendJson(ctx.body);
  }

  @route('GET', 'throw-error2')
  thrwoError() {
    throw new Error('Here some error occurred');
  }
}

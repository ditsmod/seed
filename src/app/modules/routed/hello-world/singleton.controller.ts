import { controller, RequestContext, route, SingletonRequestContext } from '@ditsmod/core';

@controller({ isSingleton: true })
export class SingletonController {
  @route('GET', 'hello2')
  tellHello(ctx: RequestContext) {
    ctx.nodeRes.setHeader('Content-Type', 'text/plain; charset=utf-8');
    ctx.nodeRes.end('Hello World!');
  }

  @route('POST', 'body2')
  postHello(ctx: SingletonRequestContext) {
    ctx.nodeRes.setHeader('Content-Type', 'application/json; charset=utf-8');
    ctx.nodeRes.end(JSON.stringify(ctx.body));
  }

  @route('GET', 'throw-error2')
  thrwoError() {
    throw new Error('Here some error occurred');
  }
}

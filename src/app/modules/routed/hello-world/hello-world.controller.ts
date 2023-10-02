import { HTTP_BODY } from '@ditsmod/body-parser';
import { controller, inject, RequestContext, Res, route, SingletonRequestContext } from '@ditsmod/core';

@controller()
export class HelloWorldController {
  constructor(private res: Res) {}

  @route('GET', 'hello')
  tellHello() {
    this.res.send('Hello World!');
  }

  @route('POST', 'body')
  postHello(@inject(HTTP_BODY) body: any) {
    this.res.sendJson(body);
  }

  @route('GET', 'throw-error')
  thrwoError() {
    throw new Error('Here some error occurred');
  }
}

@controller({ isSingleton: true })
export class SingletonHelloWorldController {
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

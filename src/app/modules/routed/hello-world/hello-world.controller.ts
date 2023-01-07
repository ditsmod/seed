import { controller, RequestContext, route } from '@ditsmod/core';
import { JwtService } from '@ditsmod/jwt';

@controller()
export class HelloWorldController {
  constructor(private ctx: RequestContext, private jwtService: JwtService) {}

  @route('GET')
  tellHello() {
    this.ctx.res.send('Hello World!\n');
  }

  @route('POST')
  postHello() {
    this.ctx.res.sendJson(this.ctx.req.body);
  }

  @route('GET', 'throw-error')
  thrwoError() {
    throw new Error('Here some error occurred');
  }

  @route('GET', 'access-token')
  async getAuthToken() {
    this.ctx.res.sendJson(await this.jwtService.signWithSecret({ one: 1 }));
  }
}

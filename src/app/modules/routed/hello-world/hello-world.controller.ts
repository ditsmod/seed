import { controller, Req, Res, route } from '@ditsmod/core';
import { JwtService } from '@ditsmod/jwt';

@controller()
export class HelloWorldController {
  constructor(private req: Req, private res: Res, private jwtService: JwtService) {}

  @route('GET')
  tellHello() {
    this.res.send('Hello World!\n');
  }

  @route('POST')
  postHello() {
    this.res.sendJson(this.req.body);
  }

  @route('GET', 'throw-error')
  thrwoError() {
    throw new Error('Here some error occurred');
  }

  @route('GET', 'access-token')
  async getAuthToken() {
    this.res.sendJson(await this.jwtService.signWithSecret({ one: 1 }));
  }
}

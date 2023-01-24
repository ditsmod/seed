import { HTTP_BODY } from '@ditsmod/body-parser';
import { controller, inject, Res, route } from '@ditsmod/core';
import { JwtService } from '@ditsmod/jwt';

@controller()
export class HelloWorldController {
  constructor(private res: Res, private jwtService: JwtService) {}

  @route('GET')
  tellHello() {
    this.res.send('Hello World!\n');
  }

  @route('POST')
  postHello(@inject(HTTP_BODY) body: any) {
    this.res.sendJson(body);
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

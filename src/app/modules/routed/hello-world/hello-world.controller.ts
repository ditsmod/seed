import { Controller, Req, Res, Route } from '@ditsmod/core';
import { JwtService } from '@ditsmod/jwt';

@Controller()
export class HelloWorldController {
  constructor(private req: Req, private res: Res, private jwtService: JwtService) {}

  @Route('GET')
  tellHello() {
    this.res.send('Hello World!\n');
  }

  @Route('POST')
  postHello() {
    this.res.sendJson(this.req.body);
  }

  @Route('GET', 'throw-error')
  thrwoError() {
    throw new Error('Here some error occurred');
  }

  @Route('GET', 'access-token')
  async getAuthToken() {
    this.res.sendJson(await this.jwtService.signWithSecret({ one: 1 }));
  }
}

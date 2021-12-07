import { Controller, Req, Res, Route } from '@ditsmod/core';

@Controller()
export class HelloWorldController {
  constructor(private req: Req, private res: Res) {}

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
}

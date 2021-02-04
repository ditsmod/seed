import { Controller, Request, Response, Route } from '@ts-stack/ditsmod';

@Controller()
export class HelloWorldController {
  constructor(private res: Response, private req: Request) {}

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

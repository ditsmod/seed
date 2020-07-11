import { Controller, Request, Response, Route, Logger } from '@ts-stack/mod';

import { BaseController } from '../../../classes/base.controller';

@Controller()
export class HelloWorldController extends BaseController {
  constructor(protected req: Request, protected res: Response, protected log: Logger) {
    super(req, res, log);
  }

  @Route('GET')
  tellHello() {
    this.res.send('Hello World!\n');
  }

  @Route('GET', 'throw-error')
  thrwoError() {
    throw new Error('Here some error occurred');
  }
}

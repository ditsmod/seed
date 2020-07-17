import { Injectable } from '@ts-stack/di';
import { ErrorHandler, Logger, Status, Request, Response } from '@ts-stack/ditsmod';

@Injectable()
export abstract class BaseController implements ErrorHandler {
  constructor(protected req: Request, protected res: Response, protected log: Logger) {}

  errorHandler(err: Error) {
    const req = this.req;
    const message = err.message;
    this.log.error({ err, req });
    if (!this.res.nodeRes.headersSent) {
      this.res.sendJson({ error: { message } }, Status.INTERNAL_SERVER_ERROR);
    }
  }
}

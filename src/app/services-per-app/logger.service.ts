import { Injectable } from '@ts-stack/di';
import { Logger, LoggerMethod } from '@ts-stack/ditsmod';

@Injectable()
export class LoggerService extends Logger {
  trace: LoggerMethod = (...args: any[]) => {
    if (!args.length) {
      return true;
    }
    console.log('Log trace ', ...args);
  };
}

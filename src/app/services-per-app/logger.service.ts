import { Injectable } from '@ts-stack/di';
import { Logger } from '@ts-stack/ditsmod';

@Injectable()
export class LoggerService extends Logger {
  trace = (...args: any[]): any => {
    if (!args.length) {
      return true;
    }
    console.log('-------------- Log trace -------------->', ...args);
  };

  info = (...args: any[]): any => {
    console.log('-------------- Log info -------------->', ...args);
  };

  debug = (...args: any[]): any => {
    console.log('---------------- Log debug ----------------->', ...args);
  };

  warn = (...args: any[]): any => {
    console.log('-------------- Log warn -------------->', ...args);
  };

  fatal = (...args: any[]): any => {
    console.log('-------------- Log fatal -------------->', ...args);
  };
}

import { Injector, Res } from '@ditsmod/core';
import { jest } from '@jest/globals';

import { HelloWorldController } from './hello-world.controller.js';

describe('HelloWorldController', () => {
  const send = jest.fn();
  const sendJson = jest.fn();
  const res = { send, sendJson } as unknown as Res;
  let helloWorldController: HelloWorldController;

  beforeEach(() => {
    send.mockRestore();
    sendJson.mockRestore();

    const injector = Injector.resolveAndCreate([
      HelloWorldController,
      { token: Res, useValue: res }
    ]);

    helloWorldController = injector.get(HelloWorldController);
  });

  it('should say "Hello World!"', () => {
    expect(() => helloWorldController.tellHello()).not.toThrow();
    expect(send).toBeCalledWith('Hello World!');
    expect(send).toBeCalledTimes(1);
    expect(sendJson).toBeCalledTimes(0);
  });

  it('should send post body back', () => {
    const postBody = {};
    expect(() => helloWorldController.postHello(postBody)).not.toThrow();
    expect(sendJson).toBeCalledWith(postBody);
    expect(send).toBeCalledTimes(0);
    expect(sendJson).toBeCalledTimes(1);
  });

  it('should throw an error', () => {
    expect(() => helloWorldController.thrwoError()).toThrow('Here some error occurred');
    expect(send).toBeCalledTimes(0);
    expect(sendJson).toBeCalledTimes(0);
  });
});

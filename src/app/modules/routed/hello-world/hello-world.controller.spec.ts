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
    expect(send).toHaveBeenCalledWith('Hello World!');
    expect(send).toHaveBeenCalledTimes(1);
    expect(sendJson).toHaveBeenCalledTimes(0);
  });

  it('should send post body back', () => {
    const postBody = {};
    expect(() => helloWorldController.postHello(postBody)).not.toThrow();
    expect(sendJson).toHaveBeenCalledWith(postBody);
    expect(send).toHaveBeenCalledTimes(0);
    expect(sendJson).toHaveBeenCalledTimes(1);
  });

  it('should throw an error', () => {
    expect(() => helloWorldController.thrwoError()).toThrow('Here some error occurred');
    expect(send).toHaveBeenCalledTimes(0);
    expect(sendJson).toHaveBeenCalledTimes(0);
  });
});

import request = require('supertest');
import { TestApplication } from '@ditsmod/testing';
import { Providers, Server } from '@ditsmod/core';
import { jest } from '@jest/globals';

import { AppModule } from '#src/app/app.module.js';

describe('Integration tests for HelloWorldController', () => {
  let server: Server;

  beforeAll(async () => {
    jest.restoreAllMocks();

    server = await new TestApplication(AppModule)
      .overrideProviders([...new Providers().useLogConfig({ level: 'fatal' })])
      .getServer();
  });

  afterAll(() => {
    server.close();
  });

  it('controller works', async () => {
    await request(server).get('/').expect(200).expect('Hello World!');
  });

  it('should parsed post', async () => {
    await request(server).post('/').send({ one: 1 }).expect(200).expect({ one: 1 });
  });

  it('should throw an error', async () => {
    await request(server).get('/throw-error').expect(500);
  });
});

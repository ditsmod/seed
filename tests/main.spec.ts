import request = require('supertest');
import { TestApplication } from '@ditsmod/testing';
import { Providers, Server } from '@ditsmod/core';

import { AppModule } from '../src/app/app.module';


describe('Integration tests for HelloWorldController', () => {
  let server: Server;

  beforeEach(async () => {
    jest.restoreAllMocks();

    server = await new TestApplication(AppModule)
      .setLogLevelForInit('error')
      .overrideProviders([
        ...new Providers().useLogConfig({ level: 'fatal' }),
      ])
      .getServer();
  });

  it('controller works', async () => {
    await request(server)
      .get('/')
      .expect(200)
      .expect('Hello World!');

    server.close();
  });

  it('should parsed post', async () => {
    await request(server)
      .post('/')
      .send({ one: 1 })
      .expect(200)
      .expect({ one: 1 });

    server.close();
  });

  it('should throw an error', async () => {
    await request(server)
      .get('/throw-error')
      .expect(500);

    server.close();
  });
});

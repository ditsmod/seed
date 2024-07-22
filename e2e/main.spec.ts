import request from 'supertest';
import { TestApplication } from '@ditsmod/testing';
import { Providers, Server, Status } from '@ditsmod/core';
import { jest } from '@jest/globals';
import { BodyParserConfig } from '@ditsmod/body-parser';

import { AppModule } from '#app/app.module.js';

describe('Integration tests for HelloWorldController', () => {
  let server: Server;
  let testAgent: ReturnType<typeof request>;

  beforeAll(async () => {
    jest.restoreAllMocks();
    const providers = new Providers().useValue<BodyParserConfig>(BodyParserConfig, { jsonOptions: { limit: '9b' } });

    server = await new TestApplication(AppModule, { path: 'api' }).overrideProviders([...providers]).getServer();
    testAgent = request(server);
  });

  afterAll(() => {
    server.close();
  });

  it('controller works', async () => {
    await testAgent.get('/api/hello').expect(200).expect('Hello World!');
  });

  it('should parsed post', async () => {
    await testAgent.post('/api/body').send({ one: 1 }).expect(200).expect({ one: 1 });
  });

  it('should throws an error when the set request body limit is exceeded', async () => {
    await testAgent.post('/api/body').send({ one: 1, two: 2 }).expect(Status.PAYLOAD_TO_LARGE);
  });

  it('should throw an error', async () => {
    await testAgent.get('/api/throw-error').expect(Status.INTERNAL_SERVER_ERROR);
  });

  it('singleton controller works', async () => {
    await testAgent.get('/api/hello2').expect(200).expect('Hello World!');
  });

  it('singleton controller should parsed post', async () => {
    await testAgent.post('/api/body2').send({ one: 1 }).expect(200).expect({ one: 1 });
  });

  it('singleton should throws an error when the set request body limit is exceeded', async () => {
    await testAgent.post('/api/body2').send({ one: 1, two: 2 }).expect(Status.PAYLOAD_TO_LARGE);
  });

  it('singleton controller should throw an error', async () => {
    await testAgent.get('/api/throw-error2').expect(Status.INTERNAL_SERVER_ERROR);
  });
});

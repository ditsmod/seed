import request = require('supertest');
import { TestApplication } from '@ditsmod/testing';
import { Server } from '@ditsmod/core';
import { jest } from '@jest/globals';

import { AppModule } from '#app/app.module.js';

describe('Integration tests for HelloWorldController', () => {
  let server: Server;

  beforeAll(async () => {
    jest.restoreAllMocks();
    server = await new TestApplication(AppModule).getServer();
  });

  afterAll(() => {
    server.close();
  });

  it('controller works', async () => {
    await request(server).get('/hello').expect(200).expect('Hello World!');
  });

  it('should parsed post', async () => {
    await request(server).post('/body').send({ one: 1 }).expect(200).expect({ one: 1 });
  });

  it('should throw an error', async () => {
    await request(server).get('/throw-error').expect(500);
  });

  it('controller works', async () => {
    await request(server).get('/hello2').expect(200).expect('Hello World!');
  });

  it('should parsed post', async () => {
    await request(server).post('/body2').send({ one: 1 }).expect(200).expect({ one: 1 });
  });

  it('should throw an error', async () => {
    await request(server).get('/throw-error2').expect(500);
  });
});

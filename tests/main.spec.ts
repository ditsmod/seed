import 'reflect-metadata';
import * as request from 'supertest';
import { Application } from '@ditsmod/core';

import { AppModule } from '../src/app/app.module';


describe('Integration tests for HelloWorldController', () => {
  it('controller works', async () => {
    const { server } = await new Application().bootstrap(AppModule, false);
    await request(server)
      .get('/')
      .expect(200)
      .expect('Hello World!');

    server.close();
  });

  it('should parsed post', async () => {
    const { server } = await new Application().bootstrap(AppModule, false);
    await request(server)
      .post('/')
      .send({ one: 1 })
      .expect(200)
      .expect({ one: 1 });

    server.close();
  });

  it('should throw an error', async () => {
    const { server } = await new Application().bootstrap(AppModule, false);
    await request(server)
      .get('/throw-error')
      .expect(500);

    server.close();
  });
});

import { XOasObject } from '@ts-stack/openapi-spec';

export const oasObject: XOasObject = {
  openapi: '3.0.0',
  // Here works the servers that are described using this OpenAPI documentation.
  servers: [{ url: 'http://localhost:8080' }],
  info: { title: 'Testing @ditsmod/openapi', version: '1.0.0' },
};

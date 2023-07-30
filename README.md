## Description

This is [@ditsmod/ditsmod](https://github.com/ditsmod/ditsmod) seed project.

## Usage

From first terminal:

```bash
git clone --depth 1 https://github.com/ditsmod/seed.git my-app
cd my-app
npm i
```

Start in development mode:

```bash
npm start
```

Now, check out OpenAPI docs on [http://localhost:3000/openapi](http://localhost:3000/openapi).

Start in production mode:

```bash
npm run build
npm run start-prod
```

From second terminal, check work:

```bash
curl -isS localhost:3000
curl -isS localhost:3000/access-token
curl -isS localhost:3000/throw-error
curl -isS localhost:3000 -d '{"one":1}' -H 'content-type: application/json'
```

## Example

You can see more example usage in [ditsmod repository](https://github.com/ditsmod/ditsmod/tree/main/examples)

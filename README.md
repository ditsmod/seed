## Description

This is [Ditsmod](https://github.com/ditsmod/ditsmod) seeds.

## Usage

From first terminal:

```bash
git clone --depth 1 https://github.com/ditsmod/seed.git my-app
cd my-app
npm i
```

Start in development mode:

```bash
# From first terminal.
# This compiles TS to JS.
npm run watch

# From second terminal.
# This starts the web server and restarts when changes are made.
npm start
```

You can check the server operation using `curl`:

```bash
curl -i localhost:3000/api/hello
```

Or simply by going to [http://localhost:3000/api/hello](http://localhost:3000/api/hello) in your browser.

By default, the application works with `debug` log level. You can change it in the file `apps/backend/src/app/app.module.ts`.

Start in production mode:

```bash
npm run build
npm run start-prod
```

From second terminal, check work:

```bash
curl -i localhost:3000/api/hello
curl -i localhost:3000/api/throw-error
curl -i localhost:3000/api/body -d '{"one":1}' -H 'content-type: application/json'

# Use controller as singleton
curl -i localhost:3000/api/hello2
curl -i localhost:3000/api/throw-error2
curl -i localhost:3000/api/body2 -d '{"one":1}' -H 'content-type: application/json'
```

## Example

You can see more example usage in [ditsmod repository](https://github.com/ditsmod/ditsmod/tree/main/examples)

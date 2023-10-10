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
# From first terminal.
# This compiles TS to JS.
npm run watch

# From second terminal.
# This starts the web server and restarts when changes are made.
npm start
```

Start in production mode:

```bash
npm run build
npm run start-prod
```

From second terminal, check work:

```bash
curl -i localhost:3000/hello
curl -i localhost:3000/throw-error
curl -i localhost:3000/body -d '{"one":1}' -H 'content-type: application/json'

# Use controller as singleton
curl -i localhost:3000/hello2
curl -i localhost:3000/throw-error2
curl -i localhost:3000/body2 -d '{"one":1}' -H 'content-type: application/json'
```

## Example

You can see more example usage in [ditsmod repository](https://github.com/ditsmod/ditsmod/tree/main/examples)

## Description

This is [@ditsmod/core](https://github.com/ditsmod/core) seed project.

## Usage

From first terminal:

```bash
git clone git@github.com:ditsmod/seed.git ditsmod-seed
cd ditsmod-seed
npm i
npm start
```

From second terminal, check work:

```bash
curl -isS localhost:8080
curl -isS localhost:8080/throw-error
curl -isS localhost:8080 -d '{"one":1}' -H 'content-type: application/json'
```

## Example

You can see more example usage in [@ditsmod/core repository](https://github.com/ditsmod/core/tree/master/examples)

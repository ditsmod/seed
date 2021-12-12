## Description

This is [@ditsmod/ditsmod](https://github.com/ditsmod/ditsmod) seed project.

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
curl -isS localhost:8080/access-token
curl -isS localhost:8080/throw-error
curl -isS localhost:8080 -d '{"one":1}' -H 'content-type: application/json'
```

## Example

You can see more example usage in [@ditsmod/ditsmod repository](https://github.com/ditsmod/ditsmod/tree/main/examples)

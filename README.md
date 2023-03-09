# json5-jest-new [![json5-jest](https://img.shields.io/npm/v/json5-jest-new.svg?longCache=true)](https://www.npmjs.com/package/json5-jest-new) [![build status](https://travis-ci.org/Duke242/json5-jest.svg?branch=master)](https://travis-ci.org/Duke242/json5-jest)

Jest json5 transformer updated to ESM and to work with Jest ≥ 28.

## Installation
```
$ npm i -D json5-jest-new
```

## Jest integration
Please append to package.json
```json
"jest": {
  "transform": {
    "^.+\\.json5?$": "json5-jest-new"
  }
}
```

or append to jest.config.js
```js
module.exports = {
  transform: {
    "^.+\\.json5?$": "json5-jest-new"
  }
};
```

## Requirements
- node ≥ 6.9.0

## Licence
MIT & CC0-1.0

## Contributers
- [@MaxMellon](https://github.com/MaxMEllon)
- [@Duke242](https://github.com/Duke242)


# json5-jest [![json5-jest](https://img.shields.io/npm/v/json5-jest-new.svg?longCache=true)](https://www.npmjs.com/package/json5-jest-new) [![build status](https://travis-ci.org/Duke242/json5-jest.svg?branch=master)](https://travis-ci.org/Duke242/json5-jest)
> jest json5 transformer

## Installation
```
$ npm i -D json5-jest
```

## Jest integration
Please append to package.json
```json
"jest": {
  "transform": {
    "^.+\\.json5?$": "json5-jest"
  }
}
```

or append to jest.config.js
```js
module.exports = {
  transform: {
    "^.+\\.json5?$": "json5-jest"
  }
};
```

## Requirements
- node >= 6.9.0
- npm >= 2.x

## Licence
MIT

## Contributers
- [@MaxMellon](https://github.com/MaxMEllon)
- [@Duke242](https://github.com/Duke242)


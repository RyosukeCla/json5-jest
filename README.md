# json5-jest [![json5-jest](https://img.shields.io/npm/v/json5-jest.svg?longCache=true)](https://www.npmjs.com/package/json5-jest) [![build status](https://travis-ci.org/RyosukeCla/json5-jest.svg?branch=master)](https://travis-ci.org/RyosukeCla/json5-jest)
> jest json5 transformer

## Installation

for jest >= 28
```
$ npm i -D json5-jest
```

for jest <= 27
```
$ npm i -D json5-jest@1
```

## Jest integration
Please append to package.json
```json
"jest": {
  "transform": {
    "^.+\\.json5$": "json5-jest"
  }
}
```

or append to jest.config.js
```js
module.exports = {
  transform: {
    "^.+\\.json5$": "json5-jest"
  }
};
```

## Requirements
- node >= 6.9.0
- npm >= 2.x
- jest >= 28

## Licence
MIT

## Contributers
- [@MaxMellon](https://github.com/MaxMEllon)
- [@wjbenfold](https://github.com/wjbenfold)
- [@Duke242](https://github.com/Duke242)

# json5-jest

## Installation
```
$ npm i -D json5-jest
```

## Jest integration
Please append to package.json
```json
"jest": {
  "transform": {
    "^.+\\.json5?$": "json5-jest",
  }
}
```

## Requirements
- node >= 6.9.0
- npm >= 2.x

## Licence
MIT
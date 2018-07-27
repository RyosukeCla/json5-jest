const json5 = require("json5");

module.exports = {
  process: src => `module.exports = ${JSON.stringify(json5.parse(src))};`
};

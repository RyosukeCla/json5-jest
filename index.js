import json5 from 'json5'

export const out = { process: (src) => ({ code: `module.exports = ${JSON.stringify(json5.parse(src))}` }) }

export default out
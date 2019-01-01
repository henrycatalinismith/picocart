import escodegen from "escodegen"
import lua2js from "lua2js"
import pegjs from "pegjs"

import grammar from "./grammar.pegjs"
import helpers from "./helpers.raw.js"

export default code => {
  const parser = pegjs.generate(helpers + grammar);
  return parser.parse(code)
}


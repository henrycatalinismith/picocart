import escodegen from "escodegen"
import lua2js from "lua2js"
import peg from "pegjs"
import grammar from "../emulator/grammar.pegjs"
import helpers from "../emulator/helpers.raw.js"

import saferEval from "safer-eval"
import actions from "../actions"

import api from "../emulator/api"
import compile from "../emulator/compiler"
import Screen from "../emulator/screen"

const parse = code => {
  const parser = peg.buildParser(helpers + grammar)
  return parser.parse(code)
}

const run = (code, memory) => {
  const evalContext = {
    __lua: lua2js.stdlib.__lua,
    ...api(memory),
  }
  delete global['__core-js_shared__']
  return saferEval(code, evalContext)
}

const thunks = {
  startEmulator() {
    return async (dispatch, getState) => {
      const canvas = document.querySelector("canvas")
      const screen = new Screen(canvas)

      dispatch(actions.startEmulator())

      const { editor } = getState()
      const ast = parse(editor.code)
      const code = compile(ast)

      await run(code, screen.memory)
      screen.render()

      console.log("💘")
    }
  },
}

export default thunks


import escodegen from "escodegen"
import lua2js from "lua2js"
import peg from "pegjs"
import grammar from "../emulator/grammar.pegjs"
import helpers from "../emulator/helpers.raw.js"

import saferEval from "safer-eval"
import actions from "../actions"

import compile from "../emulator/compiler"
import run from "../emulator/runner"
import Screen from "../emulator/screen"

const parse = (dispatch, code) => {
  console.log(helpers)
  console.log(grammar)
  const parser = peg.generate(helpers + grammar);
  return parser.parse(code)
}

const thunks = {
  startEmulator() {
    return (dispatch, getState) => {
      const canvas = document.querySelector("canvas")
      const screen = new Screen(canvas)

      dispatch(actions.startEmulator())

      const { editor } = getState()
      const ast = parse(editor.code)
      console.log(ast)
    }
  },
}

export default thunks


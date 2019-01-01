//require("babel-polyfill");
import lua2js from "lua2js";

import saferEval from "safer-eval";
import api from "./api";

export default function run(code, memory) {
  const evalContext = {
    __lua: lua2js.stdlib.__lua,
    ...api(memory),
  };

  delete global['__core-js_shared__'];

  return saferEval(code, evalContext)
}


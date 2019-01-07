import bowser from "bowser"
import { createMiddleware } from "../signalbox"
import actions from "../actions"

export default createMiddleware((before, after) => ({
  [before(actions.PAGE_REQUEST)](store, action) {
    const { request } = action
    const browser = bowser.getParser(request.headers["user-agent"])

    action.browser = browser.parsedResult.browser
    action.os = browser.parsedResult.os
    action.platform = browser.parsedResult.platform
    action.engine = browser.parsedResult.engine
  },
}))


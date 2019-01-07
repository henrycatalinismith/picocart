import url from "url"
import { createMiddleware } from "../signalbox"
import actions from "../actions"

export default createMiddleware((before, after) => ({
  [before(actions.PAGE_REQUEST)](store, action) {
    const { request } = action

    const { href } = url.parse(request.url)

    action.location = {
      href,
    }
  },
}))


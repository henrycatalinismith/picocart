import _ from "lodash"
import { createMiddleware } from "../signalbox"
import actions from "../actions"

const middleware = createMiddleware((before, after) => ({
  [after(actions.PAGE_LOAD)](store, action) {
    const dispatch = () => {
      store.dispatch(actions.resizeViewport(
        window.innerWidth,
        window.innerHeight
      ))
    }

    const throttledDispatch = _.throttle(dispatch, 300)

    window.addEventListener("resize", throttledDispatch)
  },
}))

export default middleware


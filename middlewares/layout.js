import { createMiddleware } from "../signalbox";
import actions from "../actions"

const middleware = createMiddleware((before, after) => ({
  [before(actions.PAGE_LOAD)](store, action) {
    return
    const { layout } = store.getState()

    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    const headerWidth = viewportWidth
    const mainHeight = viewportHeight - layout.headerHeight

    const stageWidth = viewportWidth
    const stageHeight = mainHeight / 2

    const toolboxWidth = viewportWidth
    const toolboxHeight = mainHeight / 2

    action.layout = {
      headerWidth,
      stageWidth,
      stageHeight,
      toolboxWidth,
      toolboxHeight,
      viewportWidth,
      viewportHeight,
    }
  }
}))

export default middleware


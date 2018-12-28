import { createMiddleware } from "../signalbox";
import actions from "../actions"

/*
const serverInitialState = {
  layout: {
    mode: "document",
    stage: false,
    toolbox: false,
    headerWidth: 32,
    headerHeight: 32,
    stageWidth: undefined,
    stageHeight: undefined,
    toolboxWidth: undefined,
    toolboxHeight: undefined,
  }
}
*/

const middleware = createMiddleware((before, after) => ({
  [before(actions.PAGE_LOAD)](store, action) {
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


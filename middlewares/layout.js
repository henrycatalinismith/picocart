import { createMiddleware } from "../signalbox";
import actions from "../actions"

/*
const serverInitialState = {
  layout: {
    mode: "document",
    stage: false,
    toolshed: false,
    headerWidth: 32,
    headerHeight: 32,
    stageWidth: undefined,
    stageHeight: undefined,
    toolshedWidth: undefined,
    toolshedHeight: undefined,
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

    const toolshedWidth = viewportWidth
    const toolshedHeight = mainHeight / 2


    action.layout = {
      headerWidth,
      stageWidth,
      stageHeight,
      toolshedWidth,
      toolshedHeight,
      viewportWidth,
      viewportHeight,
    }
  }
}))

export default middleware


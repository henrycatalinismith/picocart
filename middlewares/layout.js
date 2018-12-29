import { createMiddleware } from "../signalbox";
import actions from "../actions"

const o = (w, h) => w > h ? "landscape" : "portrait";

const middleware = createMiddleware((before, after) => ({
  [before(actions.PAGE_LOAD)](store, action) {
    if (window.location.pathname !== "/cart") {
      return
    }

    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    const header = document.querySelector(".header")
    const headerWidth = header.offsetWidth
    const headerHeight = header.offsetHeight

    const stage = document.querySelector(".stage")
    const stageWidth = stage.offsetWidth
    const stageHeight = stage.offsetHeight

    const resizer = document.querySelector(".resizer")
    const resizerWidth = resizer.offsetWidth
    const resizerHeight = resizer.offsetHeight

    const toolbox = document.querySelector(".toolbox")
    const toolboxWidth = toolbox.offsetWidth
    const toolboxHeight = toolbox.offsetHeight

    action.layout = {
      headerWidth,
      stageWidth,
      stageHeight,
      resizerWidth,
      resizerHeight,
      toolboxWidth,
      toolboxHeight,
      viewportWidth,
      viewportHeight,
    }
  },

  [before(actions.RESIZE_VIEWPORT)](store, action) {
    const { viewportWidth, viewportHeight } = action.layout

    const state = store.getState()
    const orientation = o(viewportWidth, viewportHeight)
    const { headerHeight } = state.layout
    const headerWidth = viewportWidth

    if (window.location.pathname === "/cart") {
      let {
        stageWidth,
        stageHeight,
        resizerWidth,
        resizerHeight,
        toolboxWidth,
        toolboxHeight,
      } = state.layout

      if (orientation === "portrait") {
        stageWidth = viewportWidth
        stageHeight = viewportWidth
        resizerWidth = viewportWidth
        resizerHeight = 8
        toolboxWidth = viewportWidth
        toolboxHeight = viewportHeight - headerHeight - stageHeight - resizerHeight
      } else {
        stageWidth = viewportHeight - headerHeight
        stageHeight = stageWidth
        resizerWidth = 8
        resizerHeight = viewportHeight - headerHeight
        toolboxWidth = viewportWidth - resizerWidth - stageWidth
        toolboxHeight = viewportHeight - headerHeight

        if (toolboxWidth > 320) {
          toolboxWidth = 320
          stageWidth = viewportWidth - resizerWidth - toolboxWidth
        }

        if (toolboxWidth < 200) {
          toolboxWidth = 200
          stageWidth = viewportWidth - resizerWidth - toolboxWidth
        }
      }

      action.layout = {
        ...action.layout,
        stageWidth,
        stageHeight,
        resizerWidth,
        resizerHeight,
        toolboxWidth,
        toolboxHeight,
      }
    }

    action.layout = {
      ...action.layout,
      headerWidth,
    }
  },
}))

export default middleware


import { createMiddleware } from "../signalbox";
import actions from "../actions"

const o = (w, h) => (w > h || (w/h)>0.7) ? "landscape" : "portrait";

const middleware = createMiddleware((before, after) => ({
  [before(actions.PAGE_LOAD)](store, action) {
    if (window.location.pathname !== "/cart") {
      return
    }

    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const orientation = o(viewportWidth, viewportHeight)

    const header = document.querySelector(".header")
    const headerWidth = header.offsetWidth
    const headerHeight = header.offsetHeight

    const stage = document.querySelector(".stage")
    let stageWidth = stage.offsetWidth
    let stageHeight = stage.offsetHeight

    const screen = document.querySelector(".screen__canvas")
    //const screenSize = screen.offsetWidth
    let screenSize = Math.min(stageWidth, stageHeight)

    const resizer = document.querySelector(".resizer")
    let resizerWidth = resizer.offsetWidth
    let resizerHeight = resizer.offsetHeight

    const toolbox = document.querySelector(".toolbox")
    let toolboxWidth = toolbox.offsetWidth
    let toolboxHeight = toolbox.offsetHeight

    if (orientation === "landscape" && toolboxWidth === viewportWidth) {
      resizerWidth = 16
      resizerHeight = viewportHeight - headerHeight
      toolboxWidth = 200
      toolboxHeight = viewportHeight - headerHeight
      stageWidth = viewportWidth - toolboxWidth
      stageHeight = viewportHeight - headerHeight
      screenSize = Math.min(stageWidth, stageHeight)
    }


    action.layout = {
      orientation,
      headerWidth,
      screenSize,
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
        screenSize,
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
        resizerHeight = 16
        toolboxWidth = viewportWidth
        toolboxHeight = viewportHeight - headerHeight - stageHeight - resizerHeight
      } else {
        stageWidth = viewportHeight - headerHeight
        stageHeight = stageWidth
        resizerWidth = 16
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

      screenSize = Math.min(stageWidth, stageHeight)

      action.layout = {
        ...action.layout,
        orientation,
        screenSize,
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

  [before(actions.MOVE_RESIZER)](store, action) {
    const state = store.getState()

    const {
      orientation,
      viewportWidth,
      viewportHeight,
      headerWidth,
      headerHeight,
      resizerWidth,
      resizerHeight,
    } = state.layout

    let {
      screenSize,
      stageWidth,
      stageHeight,
      toolboxWidth,
      toolboxHeight,
    } = state.layout

    if (orientation === "portrait") {
      stageHeight = action.y - headerHeight
      toolboxHeight = viewportHeight - headerHeight - stageHeight - resizerHeight
    } else {
      toolboxWidth = action.x;
      stageWidth = viewportWidth - resizerWidth - toolboxWidth
    }

    screenSize = Math.min(stageWidth, stageHeight)

    action.layout = {
      screenSize,
      stageWidth,
      stageHeight,
      toolboxWidth,
      toolboxHeight,
    }
  },
}))

export default middleware


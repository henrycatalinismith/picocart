import { createMiddleware } from "../signalbox"
import actions from "../actions"

const innerHeight = typeof window === "undefined"
  ? () => {}
  : require("ios-inner-height")

const o = (w, h) =>
  (w > h || (w/h)>0.9)
    ? "landscape"
    : "portrait"

const middleware = createMiddleware((before, after) => ({
  [before(actions.PAGE_LOAD)](store, action) {
    const layout = {}
    const header = document.querySelector(".header")
    const iOS = window.navigator.userAgent.match(/(iPad|iPhone|iPod)/g)

    //const bucket = document.querySelector(".bucket")

    layout.viewportWidth = window.innerWidth
    layout.viewportHeight = window.innerHeight

    if (iOS) {
      require("inobounce")
      layout.viewportHeight = innerHeight()
      if (o(layout.viewportWidth, layout.viewportHeight) === "portrait") {
        layout.viewportHeight -= 44
      }
      window.scrollTo(0, 0)
    }

    layout.orientation = o(layout.viewportWidth, layout.viewportHeight)
    layout.headerWidth = header.offsetWidth
    layout.headerHeight = header.offsetHeight
    //layout.bucketWidth = bucket.offsetWidth
    //layout.bucketHeight = bucket.offsetHeight

    if (window.location.pathname.startsWith("/cart")) {
      const stage = document.querySelector(".stage")
      const screen = document.querySelector(".screen__canvas")
      const resizer = document.querySelector(".resizer")
      const toolbox = document.querySelector(".toolbox")

      layout.stageWidth = stage.offsetWidth
      layout.stageHeight = stage.offsetHeight

      if (layout.orientation === "landscape") {
        layout.stageHeight = (
          layout.viewportHeight
          - layout.headerHeight
        )
      }

      layout.screenSize = Math.min(
        layout.stageWidth,
        layout.stageHeight
      )

      layout.resizerWidth = resizer.offsetWidth
      layout.resizerHeight = resizer.offsetHeight
      layout.toolboxWidth = toolbox.offsetWidth
      layout.toolboxHeight = toolbox.offsetHeight

      const isLandscape = layout.orientation === "landscape"
      const looksPortrait = (
        layout.toolboxWidth === layout.viewportWidth
      )
      if (isLandscape && looksPortrait) {
        layout.resizerWidth = 16
        layout.resizerHeight = (
          layout.viewportHeight
          - layout.headerHeight
        )
        layout.toolboxWidth = 200
        layout.toolboxHeight = (
          layout.viewportHeight
          - layout.headerHeight
        )
        layout.stageWidth = (
          layout.viewportWidth
          - layout.toolboxWidth
        )
        layout.stageHeight = (
          layout.viewportHeight
          - layout.headerHeight
        )
        layout.screenSize = Math.min(
          layout.stageWidth,
          layout.stageHeight
        )
      }
    }

    action.layout = layout
  },

  [before(actions.RESIZE_VIEWPORT)](store, action) {
    const { viewportWidth, viewportHeight } = action.layout

    const state = store.getState()
    const orientation = o(viewportWidth, viewportHeight)
    const { headerHeight } = state.layout
    const headerWidth = viewportWidth

    if (window.location.pathname.startsWith("/cart")) {
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

        resizerWidth = 16
        resizerHeight = viewportHeight - headerHeight
        const halfWidth = (viewportWidth - resizerWidth) / 2

        stageWidth = halfWidth
        stageHeight = viewportHeight - headerHeight
        toolboxWidth = halfWidth
        toolboxHeight = viewportHeight - headerHeight

        if (toolboxWidth > 320) {
          //toolboxWidth = 320
          //stageWidth = viewportWidth - resizerWidth - toolboxWidth
        }

        if (toolboxWidth < 200) {
          //toolboxWidth = 200
          //stageWidth = viewportWidth - resizerWidth - toolboxWidth
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


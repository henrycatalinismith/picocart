import _ from "lodash"
import actions from "../actions"
import emulator from "./emulator"

const canvasSizeHack =  _.debounce(dispatch => {
  const c = document.querySelector("canvas")
  c.width = 128
  c.height = 128
}, 100)

const editorHeightHack = _.debounce(dispatch => {
  if (window.location.pathname.startsWith("/cart")) {
    return
  }
  setTimeout(() => {
    const editor = document.querySelector(".editor-wrapper")
    let editorHeight = editor.offsetHeight
    dispatch(actions.updateLayout({ editorHeight }))
  }, 100)
}, 100)

const thunks = {
  moveResizer(x, y) {
    return (dispatch, getState) => {
      dispatch(actions.moveResizer(x, y))
      canvasSizeHack()
      editorHeightHack(dispatch)
    }
  },

  pageLoad() {
    return (dispatch, getState) => {
      dispatch(actions.pageLoad())

      const dispatchResize = () => {
        dispatch(thunks.resizeViewport(
          window.innerWidth,
          window.innerHeight
        ))
      }

      const throttledDispatchResize = _.throttle(
        dispatchResize,
        300
      )

      window.addEventListener("resize", throttledDispatchResize)
      if (window.location.pathname.startsWith("/cart")) {
        canvasSizeHack()
        editorHeightHack(dispatch)
      }
    }
  },

  resizeViewport() {
    return (dispatch, getState) => {
      dispatch(actions.resizeViewport(
        window.innerWidth,
        window.innerHeight
      ))
      if (window.location.pathname.startsWith("/cart")) {
        canvasSizeHack()
        editorHeightHack(dispatch)
      }
    }
  }
}

export default thunks


import _ from "lodash"
import actions from "../actions"

const editorHeightHack = _.debounce(dispatch => {
  if (window.location.pathname !== "/cart") {
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
      editorHeightHack(dispatch)
    }
  },

  resizeViewport() {
    return (dispatch, getState) => {
      dispatch(actions.resizeViewport(
        window.innerWidth,
        window.innerHeight
      ))
      editorHeightHack(dispatch)
    }
  }
}

export default thunks


import actions from "../actions"

const thunks = {
  changeCode(lua) {
    return (dispatch, getState) => {
      const { editor } = getState()

      dispatch(actions.updateCart({
        id: editor.cartId,
        lua,
      }))
    }
  },

  exitEditor() {
    return (dispatch, getState) => {
      window.location.href = "/"
    }
  },
}

export default thunks

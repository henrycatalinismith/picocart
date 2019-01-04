import actions from "../actions"

const thunks = {
  changeCode(code) {
    return (dispatch, getState) => {
      const { editor } = getState()
      const cart = {
        id: editor.cartId,
        code,
      }
      dispatch(actions.changeCode(cart))
    }
  },
}

export default thunks

import { createActions } from "../signalbox";

export default createActions([
  "EDIT_CART",
  "CHANGE_CODE",
], types => ({
  editCart: cartId => ({
    type: types.EDIT_CART,
    editor: { cartId },
  }),

  changeCode: cart => ({
    type: types.CHANGE_CODE,
    cart,
  }),
}));



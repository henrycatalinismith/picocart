import { createActions } from "../signalbox";

export default createActions([
  "LOAD_CARTS",
  "CREATE_CART",
  "UPDATE_CART",
], types => ({

  loadCarts: carts => ({
    type: types.LOAD_CARTS,
    carts,
  }),

  createCart: cart => ({
    type: types.CREATE_CART,
    cart: {
      createdAt: new Date,
      updatedAt: new Date,
      ...cart,
    },
  }),

  updateCart: cart => ({
    type: types.UPDATE_CART,
    cart: {
      updatedAt: new Date,
      ...cart,
    },
  }),

}))



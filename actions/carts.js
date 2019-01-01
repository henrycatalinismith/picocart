import { createActions } from "../signalbox";

export default createActions([
  "LOAD_CARTS",
], types => ({

  loadCarts: carts => ({
    type: types.LOAD_CARTS,
    carts,
  })

}))



import { createReducer } from "../signalbox";
import layoutActions from "../actions/layout"

export const reducer = createReducer({}, {
  [layoutActions.DETECT_VIEWPORT](layout, action) {
    return {
      ...layout,
      viewportWidth: action.viewportWidth,
      viewportHeight: action.viewportHeight,
    }
  },
})

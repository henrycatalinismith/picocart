import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"


export const reducer = state => state

export function initializeStore (initialState = {}) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

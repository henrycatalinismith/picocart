import React from "react"
import App, { Container } from "next/app"

import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore
} from "redux"

import thunkMiddleware from "redux-thunk"

import { Provider } from "react-redux"

import { composeWithDevTools } from "redux-devtools-extension"

import {
  routerReducer,
  createRouterMiddleware,
  initialRouterState
} from "connected-next-router"

import withRedux from "next-redux-wrapper"

import actions from "../actions"
import middlewares from "../middlewares"

import { reducer as layoutReducer } from "../reducers/layout"

const reducer = combineReducers({
  layout: layoutReducer,
  router: routerReducer,
});

const routerMiddleware = createRouterMiddleware();

const serverInitialState = {
  layout: {
    headerHeight: 32,
    stage: false,
    toolshed: false,
  }
}

export function makeStore (initialState = serverInitialState, options) {
  if (options.isServer) {
    initialState.router = initialRouterState(options.asPath);
  }

  const middleware = composeWithDevTools(
    applyMiddleware(
      middlewares,
      routerMiddleware,
      thunkMiddleware
    )
  )

  const store = createStore(reducer, initialState, middleware)
  if (!options.isServer) {
    window.store = store
  }

  return store
}

class _App extends App {
  componentDidMount () {
    window.store.dispatch(actions.pageLoad())
  }

  render () {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(makeStore)(_App);


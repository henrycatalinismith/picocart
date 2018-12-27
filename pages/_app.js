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

const reducer = combineReducers({
  router: routerReducer
});

const routerMiddleware = createRouterMiddleware();

export function makeStore (initialState = {}, options) {
  if (options.isServer) {
    initialState.router = initialRouterState(options.asPath);
  }

  const middleware = composeWithDevTools(
    applyMiddleware(
      routerMiddleware,
      thunkMiddleware
    )
  )

  return createStore(reducer, initialState, middleware)
}

class _App extends App {
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


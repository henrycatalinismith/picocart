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

import { reducer as layoutReducer } from "../reducers/layout"

import layoutActions from "../actions/layout"

const reducer = combineReducers({
  layout: layoutReducer,
  router: routerReducer,
});

const routerMiddleware = createRouterMiddleware();

const serverInitialState = {
  layout: {
    headerHeight: 32,
  }
}

export function makeStore (initialState = serverInitialState, options) {
  if (options.isServer) {
    initialState.router = initialRouterState(options.asPath);
  }

  const middleware = composeWithDevTools(
    applyMiddleware(
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
  static async getInitialProps ({ req, res, store }) {
    console.log("getInitialProps")
    return {
      layout: "lol"
    }
  }

  componentDidMount () {
    window.store.dispatch(
      layoutActions.detectViewport(
        window.innerWidth,
        window.innerHeight
      )
    )
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


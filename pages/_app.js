import React from "react"
import PropTypes from "prop-types"
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

import withRedux from "next-redux-wrapper"

import actions from "../actions"
import middlewares from "../middlewares"
import reducer from "../reducers"

const context = {
  insertCss: (...styles) => {
    const removeCss = styles.map(x => x._insertCss());
    return () => {
      removeCss.forEach(f => f());
    };
  },
}

const serverInitialState = {
  layout: {
    mode: "document",
    orientation: "portrait",
    stage: false,
    toolbox: false,
    headerWidth: 32,
    headerHeight: 32,
    screenSize: undefined,
    stageWidth: undefined,
    stageHeight: undefined,
    resizerWidth: undefined,
    resizerHeight: undefined,
    toolboxWidth: undefined,
    toolboxHeight: undefined,
  }
}

export function makeStore (initialState = serverInitialState, options) {
  const middleware = composeWithDevTools(
    applyMiddleware(
      middlewares,
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


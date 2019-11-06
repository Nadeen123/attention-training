import React, { Fragment } from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducer from "./reducer"
import "./App.css"
import Router from "./components"
import GlobalStyle from "./components/GlobalComponent"
import BackTop from "./components/sharedComponent/BackTop/"

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BackTop />
      <Router />
    </Provider>
  )
}

export default App

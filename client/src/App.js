import React, { Fragment } from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import Router from "./components";
import GlobalStyle from "./components/GlobalComponent";
import BackTop from "./components/sharedComponent/BackTop/";

function App() {
  // console.log(store.getState());
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BackTop />
      <Router />
    </Provider>
  );
}

export default App;

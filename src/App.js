import React, { Component } from "react";
import "./App.css";
// import UserForm from "./components/UserForm";
import { Provider } from "react-redux";
import store from "./redux/Store";
import SamsungCont from "./components/SamsungCont";
import OppoCont from "./components/OppoCont";
// import { Route, Router, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SamsungCont />
        <OppoCont />
      </Provider>
    );
  }
}

export default App;

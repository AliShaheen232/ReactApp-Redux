import React, { Component } from "react";
import "./App.css";
import * as firebase from "firebase";
import Login from "./components/Login";
import Home from "./components/Home";
// import Signup from "./components/Signup";
import { BrowserRouter as Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };
  }
  onClick = () => {
    this.setState({
      user: !this.state.user,
    });
  };
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.user ? <Login /> : <Home />}
        <button onClick={this.onClick}>change state</button>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

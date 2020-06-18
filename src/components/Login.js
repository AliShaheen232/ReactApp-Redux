import React, { Component } from "react";
import "./Firebase";
import * as firebase from "firebase";
import { history } from "../_helper/history";

class Login extends Component {
  constructor(props) {
    super(props);

    // redirect to home if already logged in
    console.log("login");
    firebase.auth().onAuthStateChanged((userAuth) => {});
    this.state = {
      email: "",
      password: "",
    };
  }

  login = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
        const { from } = this.props.location.state || {
          from: { pathname: "/" },
        };
        this.props.history.push(from);
      })
      .catch((err) => {
        console.log(err.toString());
      });
  };
  pForgot = () => {
    history.push("/forgotpassword");
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.submit}>
        <h1>Login Form</h1>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
          value={this.state.password}
        />
        <button type="submit" onClick={this.login}>
          Login
        </button>
        <button type="submit" onClick={this.pForgot}>
          Password Forgot
        </button>
      </form>
    );
  }
}

export default Login;

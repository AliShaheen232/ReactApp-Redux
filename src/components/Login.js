import React, { Component } from "react";
// import Signup from "./Signup";
// import Home from "./Home";
import "./Firebase";
import * as firebase from "firebase";

class Login extends Component {
  constructor(props) {
    super(props);

    // redirect to home if already logged in
    console.log('in login')
    firebase.auth().onAuthStateChanged(userAuth => {
      // if (userAuth) {
      //   this.props.history.push('/');
      // }
    });
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
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        this.props.history.push(from);
      })
      .catch((err) => {
        console.log(err.toString());
      });
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
      </form>
    );
  }
}

export default Login;

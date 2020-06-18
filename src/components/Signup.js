import React, { Component } from "react";
import "./Firebase";
import * as firebase from "firebase";

class Signup extends Component {
  constructor(props) {
    super(props);

    // redirect to home if already logged in
    console.log("signup");
    firebase.auth().onAuthStateChanged((userAuth) => {});
    this.state = {
      email: "",
      password: "",
    };
  }
  signup = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
        const { from } = this.props.location.state || {
          from: { pathname: "/login" },
        };
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
        <h1>Signup Form</h1>

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
        <button type="submit" onClick={this.signup}>
          Join Now
        </button>
      </form>
    );
  }
}

export default Signup;

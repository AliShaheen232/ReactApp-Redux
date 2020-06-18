import React, { Component } from "react";
import "./Firebase";
import * as firebase from "firebase";
// import { history } from "../_helper/history";

class Forgotpassword extends Component {
  constructor(props) {
    super(props);

    // redirect to home if already logged in
    console.log("reset");
    this.state = {
      email: "",
    };
  }

  resetPassword = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .sendPasswordResetEmail(this.state.email)
      .then((u) => {
        console.log(u);
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
        <h1>Reset Password</h1>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <button type="submit" onClick={this.resetPassword}>
          Send Email
        </button>
      </form>
    );
  }
}

export default Forgotpassword;

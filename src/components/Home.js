import React, { Component } from "react";
import * as firebase from "firebase";
import "./Firebase";

class Home extends Component {
  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err.toString());
      });
  };

  render() {
    return (
      <div>
        <h1>Home</h1>
        <button onClick={this.signOut}>Sign out</button>
      </div>
    );
  }
}

export default Home;

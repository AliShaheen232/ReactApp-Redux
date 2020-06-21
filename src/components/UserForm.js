import React, { Component } from "react";
import * as firebase from "firebase";
import { Router, Route, Link } from "react-router-dom";
import { PrivateRoute } from "../_helper/PrivateRoute";
import { history } from "../_helper/history";
import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";
import Forgotpassword from "./ForgotPassword";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((userAuth) => {
      this.setState({ currentUser: userAuth });
    });
  };
  signup = () => {
    this.setState({ currentUser: null });
    history.push("/signup");
  };
  logout = () => {
    firebase.auth().signOut();
    this.setState({ currentUser: null });
    history.push("/login");
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <span className="nav-item nav-link"> currentUser</span>
            <span onClick={this.signup} className="nav-item nav-link">
              Signup
            </span>
            <span onClick={this.logout} className="nav-item nav-link">
              Sign In
            </span>
          </div>
        </nav>
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3"></div>
              <Router history={history}>
                <PrivateRoute exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/forgotpassword" component={Forgotpassword} />
              </Router>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

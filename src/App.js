import React, { Component } from "react";
import "./App.css";
import * as firebase from "firebase";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import { Route, Router, Link } from "react-router-dom";
import { PrivateRoute } from "./_helper/PrivateRoute";
import { history } from './_helper/history';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        };
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(userAuth => {
            this.setState({ currentUser: userAuth });
        });
    };

    logout() {
        firebase.auth().signOut();
        this.setState({ currentUser: null });
        history.push('/login');
    }

    render() {
        const { currentUser } = this.state;
        return (
            <Router history={history}>
                <div>
                    {currentUser &&
                        <nav className="navbar navbar-expand navbar-dark bg-dark">
                            <div className="navbar-nav">
                                <Link to="/" className="nav-item nav-link">Home</Link>
                                <a className="nav-item nav-link" > currentUser</a>
                                <a onClick={this.logout} className="nav-item nav-link">Logout</a>
                            </div>
                        </nav>
                    }
                    <div className="jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <PrivateRoute exact path="/" component={Home} />
                                    <Route path="/login" component={Login} />
                                    <Route path="/signup" component={Signup} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
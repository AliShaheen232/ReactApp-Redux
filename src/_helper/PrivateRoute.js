import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import * as firebase from "firebase";
import { history } from "./history"
export const PrivateRoute = ({ component: Component, ...rest }) => (<
    Route {...rest}
    render={
        props => {
            firebase.auth().onAuthStateChanged((user) => {
                console.log(user);
                if (!user) {
                    console.log('not logged in');

                    // not logged in so redirect to login page with the return url
                    return history.push('/login');
                } else {
                    console.log(' in');

                    // authorised so return component
                    return <Component {...props}
                    />
                }
            });
        }
    }
/>
)
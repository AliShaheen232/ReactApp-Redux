// import React, { Component } from "react";
// import * as firebase from "firebase";
// import Login from "./Login";
// import Signup from "./Signup";

// class SL extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       user: false,
//     };
//   }
//   onClick = () => {
//     this.setState({
//       user: !this.state.user,
//     });
//   };
//   componentDidMount() {
//     this.authListener();
//   }
//   authListener() {
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         this.setState({ user });
//       } else {
//         this.setState({ user: null });
//       }
//     });
//   }

//   render() {
//     return (
//       <React.Fragment>
//         {this.state.user ? <Login /> : <Signup />}
//         <button onClick={this.onClick}>change state</button>
//       </React.Fragment>
//     );
//   }
// }

// export default SL;

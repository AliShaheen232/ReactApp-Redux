import React, { Component } from "react";
import { buyOppo } from "../redux";
import { connect } from "react-redux";

function OppoCont(props) {
  return (
    <div>
      <h2>Oppo Mobile - {props.numOfOppo}</h2>
      <button onClick={props.buyOppo}>Buy Mobile</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfOppo: state.oppo.numOfOppo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyOppo: () => dispatch(buyOppo()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OppoCont);

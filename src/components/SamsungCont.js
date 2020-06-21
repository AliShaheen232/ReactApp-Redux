import React from "react";
import { buySamsung } from "../redux";
import { connect } from "react-redux";

function SamsungCont(props) {
  return (
    <div>
      <h1>Samsung Mobile - {props.numOfSamsung}</h1>
      <button onClick={props.buySamnsung}>Buy Mobile</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfSamsung: state.samsung.numOfSamsung,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buySamnsung: () => dispatch(buySamsung()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SamsungCont);

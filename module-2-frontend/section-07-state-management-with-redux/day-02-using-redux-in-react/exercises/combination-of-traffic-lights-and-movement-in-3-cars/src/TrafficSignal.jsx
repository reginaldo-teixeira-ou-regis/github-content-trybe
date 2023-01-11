import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import redSignal from "./images/redSignal.jpeg";
import greenSignal from "./images/greenSignal.jpeg";
import yellowSignal from "./images/yellowSignal.jpeg";
import { changeSignal } from "./redux/actions";

const red = "red";
const green = "green";
const yellow = "yellow";

const renderSignal = (signalColor) => {
  switch (signalColor) {
    case red:
      return redSignal;
    case green:
      return greenSignal;
    case yellow:
      return yellowSignal;
    default:
      return null;
  }
};

function TrafficSignal({ signalColor, trafficLightSignal }) {
  return (
    <div>
      <div className="button-container">
        <button
          onClick={() => {
            trafficLightSignal(red);
          }}
          type="button"
        >
          Red
        </button>
        <button
          onClick={() => {
            trafficLightSignal(yellow);
          }}
          type="button"
        >
          Yellow
        </button>
        <button
          onClick={() => {
            trafficLightSignal(green);
          }}
          type="button"
        >
          Green
        </button>
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="" />
    </div>
  );
}

const mapStateToProps = (globalState) => ({
  signalColor: globalState.trafficSignalReducer.color,
});

const mapDispatchToProps = (dispatch) => ({
  trafficLightSignal: (signalColors) => dispatch(changeSignal(signalColors)),
});

TrafficSignal.propTypes = {
  signalColor: PropTypes.string.isRequired,
  trafficLightSignal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);

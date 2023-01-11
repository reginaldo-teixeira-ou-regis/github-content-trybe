import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import carYellow from "./images/carYellow.jpeg";
import carBlue from "./images/carBlue.jpeg";
import carRed from "./images/carRed.jpeg";
import { moveCar } from "./redux/actions";

function Cars({ redCar, blueCar, yellowCar, moveCars }) {
  return (
    <div>
      <div>
        <img
          className={redCar ? "car-right" : "car-left"}
          src={carRed}
          alt="red car"
        />
        <button
          onClick={() => {
            moveCars("red", !redCar);
          }}
          type="button"
        >
          move
        </button>
      </div>
      <div>
        <img
          className={blueCar ? "car-right" : "car-left"}
          src={carBlue}
          alt="blue car"
        />
        <button
          onClick={() => {
            moveCars("blue", !blueCar);
          }}
          type="button"
        >
          move
        </button>
      </div>
      <div>
        <img
          className={yellowCar ? "car-right" : "car-left"}
          src={carYellow}
          alt="yellow car"
        />
        <button
          onClick={() => {
            moveCars("yellow", !yellowCar);
          }}
          type="button"
        >
          move
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (globalState) => ({
  redCar: globalState.carsReducer.cars.red,
  blueCar: globalState.carsReducer.cars.blue,
  yellowCar: globalState.carsReducer.cars.yellow,
});

const mapDispatchToProps = (dispatch) => ({
  moveCars: (carColors, conditional) =>
    dispatch(moveCar(carColors, conditional)),
});

Cars.propTypes = {
  redCar: PropTypes.bool.isRequired,
  blueCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
  moveCars: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cars);

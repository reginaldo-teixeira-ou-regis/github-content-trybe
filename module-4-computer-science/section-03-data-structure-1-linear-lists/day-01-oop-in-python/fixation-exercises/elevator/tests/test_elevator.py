from elevator_system.elevator import Elevator, ElevatorStatus
from elevator_system.motor import Motor, MotorSide
from unittest.mock import patch


@patch("time.sleep", return_value=None)
def test_move_up(self):
    # Triple AAA Test
    # Scenario / Arrange
    elevator = Elevator(Motor())
    destination_floor = 5

    # Action / Act
    elevator.move(destination_floor)

    # Tests / Asserts
    assert not elevator.door_is_open
    assert elevator.status == ElevatorStatus.GOING_UP
    assert elevator.current_floor == destination_floor
    assert elevator.motor.side == MotorSide.CLOCKWISE


@patch("time.sleep", return_value=None)
def test_move_down(self):
    # Triple AAA Test
    # Scenario / Arrange
    elevator = Elevator(Motor())
    elevator.current_floor = 8
    destination_floor = 1

    # Action / Act
    elevator.move(destination_floor)

    # Tests / Asserts
    assert not elevator.door_is_open
    assert elevator.status == ElevatorStatus.GOING_DOWN
    assert elevator.current_floor == destination_floor
    assert elevator.motor.side == MotorSide.ANTICLOCKWISE


def test_move_same_floor():
    elevator = Elevator(Motor())
    elevator.current_floor = 8
    destination_floor = 8

    elevator.move(destination_floor)

    # Tests / Asserts
    assert elevator.door_is_open
    assert elevator.status == ElevatorStatus.STOPPED
    assert elevator.current_floor == destination_floor

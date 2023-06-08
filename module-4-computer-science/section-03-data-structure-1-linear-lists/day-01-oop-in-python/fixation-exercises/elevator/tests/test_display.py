import json
import pytest
from elevator_system.displays.external_display import ExternalDisplay
from elevator_system.displays.internal_display import InternalDisplay
from elevator_system.displays.display_json import DisplayJson
from elevator_system.elevator import Elevator, ElevatorStatus
from elevator_system.motor import Motor


@pytest.fixture
def elevator():
    elevator = Elevator(Motor())
    elevator.current_floor = 3
    elevator.status = ElevatorStatus.GOING_UP

    return elevator


def test_internal_display(elevator):
    display = InternalDisplay(elevator).display()

    assert display == "3"


def test_external_display(elevator):
    display = ExternalDisplay(elevator).display()
    assert display == "⬆ 3"


def test_json_display(elevator):
    display = DisplayJson(elevator).display()
    text = json.loads(display)
    assert text["floor"] == 3
    assert text["side"] == str(ElevatorStatus.GOING_UP)

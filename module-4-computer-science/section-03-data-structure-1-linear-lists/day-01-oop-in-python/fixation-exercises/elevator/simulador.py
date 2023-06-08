from elevator_system.elevator import Elevator
from elevator_system.motor import Motor
from elevator_system.displays.external_display import ExternalDisplay
from elevator_system.displays.internal_display import InternalDisplay
from elevator_system.displays.display_json import DisplayJson


main_elevator = Elevator(Motor())
main_elevator.current_floor = 5

choosed_floor = input("\nEscolha o andar: [1 2 3 4 5 6 7 8 9]: ")

print("\n...Musica de elevator...\n")
main_elevator.move(int(choosed_floor))

print("PAINEL\n")
print("ExternalDisplay: ", ExternalDisplay(main_elevator).display())
print("InternalDisplay: ", InternalDisplay(main_elevator).display())
print("DisplayJson: ", DisplayJson(main_elevator).display())

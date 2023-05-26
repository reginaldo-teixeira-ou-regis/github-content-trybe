import { IAgenda } from '../interfaces/IAgenda';

abstract class SportsCourt {
  protected abstract toReserve<T>(hourOfReservation: Date): IAgenda<T>;
}

export default SportsCourt;
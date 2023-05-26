import conditions from '../conditions/conditionsOfUse';
import { IAgenda } from '../interfaces/IAgenda';
import SportsCourt from './SportsCourt';
import { ITennis } from '../interfaces/ITennis';

class TennisCourt extends SportsCourt {
  public tennisDate: ITennis = conditions.tennis;

  public toReserve<ITennis>(hourOfReservation: Date): IAgenda<ITennis> {
    const protocol = (Math.random() + 1).toString(30).substring(3);
    return {
      protocol,
      date: hourOfReservation,
      rules: this.tennisDate as unknown as ITennis,
    };
  }
}

export default TennisCourt;
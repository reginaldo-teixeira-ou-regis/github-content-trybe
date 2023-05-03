import { IAgenda } from '../interfaces/IAgenda';
import { IFootball } from '../interfaces/IFootball';
import conditions from '../conditions/conditionsOfUse';
import SportsCourt from './SportsCourt';

class FootballCourt extends SportsCourt {
  public footballDate: IFootball = conditions.football;
  public toReserve<IFootball>(hourOfReservation: Date): IAgenda<IFootball> {
    const protocol = (Math.random() + 1).toString(30).substring(3);
    return {
      protocol,
      date: hourOfReservation,
      rules: this.footballDate as unknown as IFootball,
    };
  }
}

export default FootballCourt; 
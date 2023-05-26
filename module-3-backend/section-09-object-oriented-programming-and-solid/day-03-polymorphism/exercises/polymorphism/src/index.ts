import Club from './entity/Club';
import FootballCourt from './entity/FootballCourt';

const trybeClube = new Club();
const footballCourt = new FootballCourt();
trybeClube.addSportsCourt(footballCourt);

const dateReservation = new Date('2022-12-28');

const footballCourtReservation = trybeClube
  .searchSportsCourt<FootballCourt>(0)
  .toReserve(dateReservation);
console.log(footballCourtReservation);
import SportsCourt from './SportsCourt';

class Club {
  private sportsCourts: SportsCourt[] = [];

  public addSportsCourt(sportsCourt: SportsCourt) {
    this.sportsCourts.push(sportsCourt);
  }

  public searchSportsCourt<T extends SportsCourt>(index: number): T {
    return this.sportsCourts[index] as T;
  }
}

export default Club;
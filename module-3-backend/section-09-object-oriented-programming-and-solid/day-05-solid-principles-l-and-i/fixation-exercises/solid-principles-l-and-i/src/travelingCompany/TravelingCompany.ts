class Passenger {
  constructor(public nome: string, public cpf: number) { }
}

class ShippedItem {
  constructor(
    public nome: string, 
    public id: number, 
    public customerID: string,
  ) { }
}

class Flight {
  constructor(public num: number, public payload: (Passenger | ShippedItem)[]) { }

  add(newPayload: Passenger | ShippedItem): void {
    this.payload.push(newPayload); 
  }

  remove(removedPayload: Passenger | ShippedItem): void {
    const index = this.payload.indexOf(removedPayload, 0);
    if (index > -1) {
      this.payload.splice(index, 1);
    }
  }
}

class Company {
  constructor(public nome: string, public flights: Flight[]) { }
  newFlight(flightNum: number): void {
    const newFlight = new Flight(flightNum, []);
    this.flights.push(newFlight);
  }

  addToFlight(flightNum: number, payload: Passenger | ShippedItem): void { }
  removeToFlight(flightNum: number, payload: Passenger | ShippedItem): void { }
}

class TravelingCompany extends Company {
  addToFlight(flightNum: number, passenger: Passenger): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.add(passenger);
    }
  }

  removeFromFlight(flightNum: number, passenger: Passenger): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.remove(passenger);
    }
  }
}

class ShippingCompany extends Company {
  addToFlight(flightNum: number, item: ShippedItem): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.add(item);
    }
  }

  removeToFlight(flightNum: number, item: ShippedItem): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.remove(item);
    }
  }
}

const myCompany = new TravelingCompany("Minha Empresa de Viagens", []);
myCompany.newFlight(123);

const newPassenger = new Passenger("Reginaldo Teixeira", 123456789);
myCompany.addToFlight(123456, newPassenger);

const newItem = new ShippedItem("Caixa", 1, "12345678910");
myCompany.addToFlight(1234, newPassenger);

myCompany.removeToFlight(1234, newPassenger);
myCompany.removeToFlight(1234, newItem);

console.log(" ");
console.log(myCompany);
console.log("\n-----------------------------------\n");
console.log(newPassenger);
console.log("\n-----------------------------------\n");
console.log(newItem);
console.log(" ");
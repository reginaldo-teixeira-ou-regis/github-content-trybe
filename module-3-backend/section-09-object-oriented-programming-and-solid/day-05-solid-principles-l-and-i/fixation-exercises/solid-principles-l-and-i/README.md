Exercicios De Fixação:

Iniciando...

Primeiramente, você vai precisar criar uma pasta para 
o exemplo e colocar nela os seguintes arquivos:

* `package.json`

```js
{
  "name": "solid-2",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "npx ts-node src"
  },
  "license": "ISC",
  "devDependencies": {
    "@types/mysql": "2.15.19",
    "@types/redis": "2.8.32"
  },
  "dependencies": {
    "ts-node": "10.2.1",
    "mysql": "2.18.1",
    "redis": "3.1.2",
    "typescript": "4.4.3"
  }
}
```

* `docker-compose.yml`

```js
version: '3.1'

services:
  mysqldb:
    image: mysql:8.0.26
    container_name: solid_mysqldb_container
    command: --default-authentication-plugin=mysql_native_password
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: example
    networks: 
      - net1

  redisdb:
    image: redis:6.2.5
    container_name: solid_redisdb_container
    restart: always
    networks: 
      - net2

  solid_node_service:
    image: node:14.17.6
    container_name: solid_node_container
    command: npm install
    working_dir: /home/app
    volumes:
      - ./:/home/app
    networks: 
      - net1
      - net2

networks: 
  net1:
  net2:
```

Abrindo a pasta no VS Code, dê uma lida nos arquivos para entender 
o que acabou de ser criado. Em seguida, rode os comandos a seguir 
para iniciar os serviços e acessá-los:

```js
// Para iniciar os serviços dos bancos MySQL e Redis, 
// bem como iniciar o serviço do Node e instalar nele as dependências;

sudo docker-compose up -d
```

```js
// Para iniciar o `bash` no serviço do Node;

sudo docker-compose run solid_node_service bash
```

* Analisando o código abaixo, o que deve ser modificado para que ele compreenda 
tanto o LSP (Liskov Substitution Principle, princípio de Substituição de Liskov) quanto ISP (Interface Segregation Principle, Princípio da Segregação de Interface)?

```js
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
  constructor(public num: number, public passengers: Passenger[]) { }

  add(newPassenger: Passenger): void {
    this.passengers.push(newPassenger); 
  }

  remove(removedPassenger: Passenger): void {
    const index = this.passengers.indexOf(removedPassenger, 0);
    if (index > -1) {
      this.passengers.splice(index, 1);
    }
  }
}

class Company {
  constructor(public nome: string, public flights: Flight[]) { }
  newFlight(flightNum: number): void { }
  addToFlight(flightNum: number, passenger: Passenger): void { }
  removeFromFlight(flightNum: number, passenger: Passenger): void { }
}

class TravelingCompany extends Company {
  newFlight(flightNum: number): void {
    const newFlight = new Flight(flightNum, []);
    this.flights.push(newFlight);
  }

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
  newFlight(flightNum: number): void {
    const newFlight = new Flight(flightNum, []);
    this.flights.push(newFlight);
  }

  addToFlight(flightNum: number, item: ShippedItem | Passenger): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.add(item);
    }
  }
}
```
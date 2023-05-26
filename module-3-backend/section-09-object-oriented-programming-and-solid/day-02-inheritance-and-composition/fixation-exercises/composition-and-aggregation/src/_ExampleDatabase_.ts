import ConsoleLogger from './ConsoleLogger';
import ConsoleLogger2 from './ConsoleLogger2';
import { Database, Logger } from './interface';

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) { }
  save(key: string, value: string): void {
    this.logger.log(`Salvando o valor ${value} na chave ${key}`);
  }
}

export default ExampleDatabase;

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');
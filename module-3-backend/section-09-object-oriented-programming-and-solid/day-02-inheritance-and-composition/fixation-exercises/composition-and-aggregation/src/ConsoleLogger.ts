import { Logger } from './interface';

class ConsoleLogger implements Logger {
  log(param: string): void {
    console.log(param);
  }
}

export default ConsoleLogger;
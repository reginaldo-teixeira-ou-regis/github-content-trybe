import { Logger } from './interface';

class ConsoleLogger2 implements Logger {
  log(param: string): void {
    console.log(`Logger2: ${param}`);
  }
}

export default ConsoleLogger2;
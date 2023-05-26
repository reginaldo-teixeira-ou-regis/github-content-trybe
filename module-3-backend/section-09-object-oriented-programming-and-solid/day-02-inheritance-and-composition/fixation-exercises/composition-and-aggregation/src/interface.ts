export interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

export interface Logger {
  log(param: string): void;
}
export interface IAgenda<T> {
  protocol: string,
  rules: T,
  date: Date
}
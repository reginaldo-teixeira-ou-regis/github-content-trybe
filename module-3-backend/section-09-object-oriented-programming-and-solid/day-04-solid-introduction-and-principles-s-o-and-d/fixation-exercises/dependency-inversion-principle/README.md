Exercicios De Fixação: 

* Faça as adequações necessárias no construtor da classe ReadingTracker, 
de forma que ele passe a respeitar o Princípio da Inversão de Dependência (DIP).

Para EXERCUTAR os Exercicios De Fixação: "npm start"
```js
// Notificator.ts

export default interface Notificator {
  sendNotification(message: string): void;
}
```
```js
// ConsoleNotification.ts

import Notificator from './Notificator';

export default class ConsoleNotification implements Notificator {
  constructor(private name: string) { }

  sendNotification(message: string): void {
    console.log(`Here we go again! - ${message} from ${this.name}`);
  }
}
```
```js
// EmailNotification.ts

import Notificator from './Notificator';

export default class EmailNotification implements Notificator {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  sendNotification(message: string): void {
    console.log(
      `Here should go the implementation \
      to send notification to the email: ${this.email} - ${message}`,
    );
  }
}
```
```js
// PhoneNotification.ts

import Notificator from './Notificator';

export default class PhoneNotification implements Notificator {
  private phone: number;

  constructor(phone: number) {
    this.phone = phone;
  }

  sendNotification(message: string): void {
    console.log(
      `Here should go the implementation \
      to send notification to the phone ${this.phone} - ${message}`,
    );
  }
}
```
```js
// ReadingTracker.ts

import EmailNotification from './EmailNotification';
import Notificator from './Notificator';

export default class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  notificator: Notificator;
  constructor(readingGoal: number, email: string) {
    this.notificator = new EmailNotification(email);
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.notificator.sendNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    this.notificator.sendNotification('There are still some books to go!');
  }
  // Aqui viriam mais métodos, que fogem o escopo deste exercício
}
```
type Notification = { type: string, send: (message: string) => void };

// Criando variáveis para guardar cada tipo aceito por nossa função
const consoleNotification: Notification = {
  type: 'Console',
  send: (message) => console.log('Console: ', message),
};

const emailNotification: Notification = {
  type: 'Email',
  send: (message) => console.log('Email: ', message),
};

const phoneNotification: Notification = {
  type: 'Phone',
  send: (message) => console.log('Phone: ', message),
};

const notifications: Notification[] = [
  consoleNotification,
  emailNotification,
  phoneNotification,
];

// Agora podemos adicionar novos tipos sem modificar nossa função
export default function progressNotification(
  message: string,
  type_ = 'Console',
  notificationsArray: Notification[] = notifications,
): void {
  notificationsArray.forEach((notification) => {
    if (notification.type === type_) {
      notification.send(message);
    }
  });
}

class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      progressNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    progressNotification(
      'There are still some books to go!',
    );
  }
}

const readTracker = new ReadingTracker(20);
readTracker.trackReadings(12);
readTracker.trackReadings(9);
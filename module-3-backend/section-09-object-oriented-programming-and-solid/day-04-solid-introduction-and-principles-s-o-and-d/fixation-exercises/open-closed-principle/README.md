Exercicios De Fixação: 

* Observe o código abaixo e faça as alterações necessárias para 
que ele passe a respeitar o Princípio do Aberto/Fechado (OCP).

Para EXERCUTAR os Exercicios De Fixação: "npm start"
```js
export default function progressNotification(
  message: string,
  notificationType: string,
): void {
  switch (notificationType) {
    case 'Email':
      console.log('Email: ', message);
      break;
    case 'Phone':
      console.log('Phone: ', message);
      break;
    case 'Console':
      console.log('Console: ', message);
      break;
    default:
      console.log(message);
      break;
  }
}
```
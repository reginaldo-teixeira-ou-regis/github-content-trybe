import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/error.middleware';
import userRouter from './routers/user.router';

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'não muda nada' }));
app.use(userRouter);
app.use(errorMiddleware);

// async function main() {
//   const users = await userService.findAll();
//   console.log(users);
// }
  
// main();
app.listen(3000, () => console.log('API ONLINE E RODANDO'));

// Login
// Entrada: email e Password
// Saida: token

// Validar o email -> Verificar se existe algum usuário com esse email
// Se o usuário não existir? 401
// Se o usuário existir? 
// Validar a senha -> Comparar a senha do banco com a senha enviada
// Se a senha for inválida? 401
// Se a senha for válida
// Criar e retornar token jwt
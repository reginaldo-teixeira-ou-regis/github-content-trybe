import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/error.middleware';
import userRouter from './routers/user.router';

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'não muda nada' }));
app.use(userRouter);
app.use(errorMiddleware);

export default app;
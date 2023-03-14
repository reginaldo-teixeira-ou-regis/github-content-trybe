const app = require('./app');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`TrybeCash API is running on port ${PORT}`);
  console.log(`Valor da variável de ambiente $USER: ${process.env.USER}`);
});
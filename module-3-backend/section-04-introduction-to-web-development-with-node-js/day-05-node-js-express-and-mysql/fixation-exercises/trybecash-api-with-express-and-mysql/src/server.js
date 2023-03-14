const app = require('./app');

const PORT = 3011;

app.listen(PORT, () => {
  console.log(`TrybeCash API is running on port ${PORT}`);
});
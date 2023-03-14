const app = require('./app');

const port = 3010;

app.listen(port, async () => {
  console.log(`Tasks Manager API is being running on port ${port}`);
});

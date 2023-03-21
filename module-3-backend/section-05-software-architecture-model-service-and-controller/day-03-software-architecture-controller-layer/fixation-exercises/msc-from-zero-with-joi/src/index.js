require('dotenv').config();
const express = require('express');

const app = express();

const employeeController = require('./controllers/employee');
const employeeDataValidator = require('./middlewares/employeeDataValidator');
const teamDataValidator = require('./middlewares/teamDataValidator');
const errorHandler = require('./middlewares/errorHandler');


const PORT = process.env.PORT;

app.use(express.json());

app.post('/employee', employeeDataValidator, employeeController.create);
app.post('/team', teamDataValidator);
app.get('/employee/:id', employeeController.getById);

app.use(errorHandler);

app.listen(PORT, () => console.log(`App running on Port: ${PORT}`));
const express = require('express');

const {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  createPatient,
  getPatientsAndSurgeriesNoDoctor,
} = require('./controllers/patientsController');

const { getAllPlans } = require('./controllers/plansController');

const { getDoctorSurgeries } = require('./controllers/surgeriesController');

const app = express();
app.use(express.json());

app.get('/patients/plans', getAllPatientsPlans);

app.get('/patients/surgeries', getAllPatientsSurgeries);

app.get('/plans/:id', getAllPlans);

app.get('/patients/surgeries/nodoctor', getPatientsAndSurgeriesNoDoctor);

app.post('/patients', createPatient);

app.get('/surgeries/:name', getDoctorSurgeries);

module.exports = app;
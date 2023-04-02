const express = require('express');
const courseController = require('../controllers/course.controller');

const routers = express.Router();

routers.post('/', courseController.createCourse);
routers.get('/', courseController.getAllCourses);
routers.get('/:id', courseController.getCourseById);
routers.delete('/:id', courseController.removeCourse);

module.exports = routers;
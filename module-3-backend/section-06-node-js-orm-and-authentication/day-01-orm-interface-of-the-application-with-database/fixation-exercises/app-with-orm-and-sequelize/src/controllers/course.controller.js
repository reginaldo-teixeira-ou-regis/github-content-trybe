const courseService = require('../services/course.service');

const createCourse = async (req, res) => {
  const newCourse = await courseService.createCourse(req.body);

  return res.status(201).json(newCourse);
}

const getAllCourses = async (req, res) => {
  const courses = await courseService.getAllCourses();
  
  return res.status(200).json(courses);
}

const getCourseById = async (req, res) => {
  const { params: { id }} = req;
  const course = await courseService.getCourseById(id);

  return res.status(200).json(course);
}

const removeCourse = async (req, res) => {
  const { params: { id }} = req;
  const deleted = await courseService.removeCourse(id);

  return res.status(200).json(deleted);
}

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  removeCourse,
};
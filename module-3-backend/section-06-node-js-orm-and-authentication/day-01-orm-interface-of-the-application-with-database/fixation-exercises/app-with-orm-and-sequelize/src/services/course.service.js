const { Course } = require('../models');

const createCourse = async (
  { name, description, creationDate, active, duration }
) => Course.create({ name, description, creationDate, active, duration });

const getAllCourses = async () => Course.findAll();

const getCourseById = async (id) => Course.findOne({ where: { id }});

const updateCourse = async (
  id, { name, description, creationDate, active, duration }
) => {
  const [qtdUpdated] = await Course.update({
    name, description, creationDate, active, duration
  }, { where: { id }});

  return qtdUpdated > 0;
}

const removeCourse = async (id) => {
  const qtdRemoved = await Course.destroy({ where: { id }});

  return qtdRemoved > 0;
}

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  removeCourse,
};
const express = require('express');
const {allStudents, singleStudent, createStudent, updateStudent, deleteSingle } = require('../contoller/studentController');
const router = express.Router();

router.route('/students').get(allStudents).post(createStudent)
router.route('/students/:id').get(singleStudent).put(updateStudent).delete(deleteSingle)


module.exports= router
const express = require('express');
const router = express.Router();
const { getTasks, getTaskById, createTask, updateTask, deleteTask } = require('../controllers/taskController');

router.get('/', getTasks);

router.post('/', createTask);

router.get('/:id', getTaskById)

router.patch('/:id', updateTask);

router.delete('/:id', deleteTask);

module.exports = router;
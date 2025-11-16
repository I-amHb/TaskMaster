const express = require('express');
const router = express.Router();

const validateTask = require('../validator/taskValidator');
const { getTasks, getTaskById, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, getTasks);

router.post('/', authMiddleware, validateTask, createTask);

router.get('/:id', authMiddleware, getTaskById)

router.patch('/:id', authMiddleware, validateTask, updateTask);

router.delete('/:id', authMiddleware, deleteTask);

module.exports = router;
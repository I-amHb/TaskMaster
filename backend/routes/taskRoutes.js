const express = require('express');
const router = express.Router();
const { getTasks, getTaskById, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, getTasks);

router.post('/', authMiddleware, createTask);

router.get('/:id', authMiddleware, getTaskById)

router.patch('/:id', authMiddleware, updateTask);

router.delete('/:id', authMiddleware, deleteTask);

module.exports = router;
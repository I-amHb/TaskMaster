const Task = require('../models/taskSchema');

const getTasks = async (req, res) => {
    try {

        const { priority, completed, search, sort } = req.query;

        const query = {};

        query.user = req.user.id;

        if (priority) query.priority = priority;
        if (completed) query.completed = completed === 'true';

        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ];
        }

        let taskQuery = Task.find(query);


        if (sort) {
            taskQuery = taskQuery.sort(sort);
        };

        const tasks = await taskQuery;

        if (tasks.length === 0) {
            return res.status(404).json({ message: 'No tasks found' });
        }

        res.json(tasks);

    } catch (err) {
        res.status(500).json({ error: 'Server error' })
    }
};

const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const taskById = await Task.findById(id);

        if (!taskById) {
            return res.status(404).json({ error: 'Task not found' });
        }

        if (taskById.user.toString() !== req.user.id) {
            return res.status(403).json({message: 'Not authorized'})
        }
        
        res.json(taskById);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }

};

const createTask = async (req, res) => {
    try {
        const { title, description, priority, deadline } = req.body;
        const newTask = new Task({ 
            title, 
            description, 
            priority, 
            deadline,
            user: req.user.id
        });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ error: 'Server error' })
    };
};

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json({message: 'Task not found'})
        }

        if(task.user.toString() !== req.user.id) {
            return res.status(403).json({message: 'Not authorized'});
        }

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
        
        res.json(updatedTask);

    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    };

};

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json({message: 'Task not found'})
        }

        if(task.user.toString() !== req.user.id) {
            return res.status(403).json({message: 'Not authorized'});
        }
        await Task.findByIdAndDelete(id);

        res.json({ message: 'Task Deleted Successfully' });

    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

module.exports = { getTasks, getTaskById, createTask, updateTask, deleteTask };


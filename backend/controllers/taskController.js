const getTasks = (req, res) => {
    res.json({ message: 'Not implemented yet' });
};

const getTaskById = (req, res) => {
    const { id } = req.params;
    res.json({ message: `Fetch task with id: ${id} (Not implemented yet)` });
};

const createTask = (req, res) => {
    const { title, description } = req.body;
    res.json({ message: 'Create new task not implemented yet', task: { title, description } });
};

const updateTask = (req, res) => {
    const { id } = req.params;
    res.json({ message: `Update task with id ${id} (not implemented yet)` });
};

const deleteTask = (req, res) => {
    const { id } = req.params;
    res.json({ message: `Delete task with id ${id} (not implemented yet)` });
};

module.exports = { getTasks, getTaskById, createTask, updateTask, deleteTask };




const registerUser = (req, res) => {
    const { name, email, password } = req.body;
    res.json({
        message: 'Not implemented yet',
        user: { name, email }

    });
};

const loginUser = (req, res) => {
    const { email, password } = req.body;
    res.json({
        message: 'Not implemented yet',
        credientials: { email, password }
    });
};

const getUsers = (req, res) => {
    res.json({ message: 'Fetch all users (Not implemented yet)' });
};

const getUserById = (req, res) => {
    const { id } = req.params;
    res.json({ message: `Fetch user with id: ${id} (Not implemented yet)` });
};

module.exports = { registerUser, loginUser, getUsers, getUserById };
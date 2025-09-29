const User = require('../models/userSchema')

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exits' });
        }

        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email
            }

        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}
const loginUser = () => {

}

module.exports = { registerUser, loginUser };
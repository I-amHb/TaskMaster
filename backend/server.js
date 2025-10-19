require('dotenv').config()
const express = require('express');
const path = require('path');

const app = express();

const connectDB = require('./config/db')
connectDB();

// Routes import

const testRoutes = require('./routes/testRoutes');

const taskRoutes = require('./routes/taskRoutes');

const userRoutes = require('./routes/userRoutes');

const authRoutes = require('./routes/authRoutes');

// Middlewares

app.use(express.json());

// Api Routes


app.use('/api/tasks', taskRoutes);

// app.use('/api/users', userRoutes);

app.use('/api/auth', authRoutes);

app.use('/api', testRoutes);

// Home

app.use(express.static(path.join(__dirname, '../frontend')));

const PORT = 3030;
app.listen(PORT, () => {
    console.log(`Server now running on: http://localhost:${PORT}`);
});
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://iamHB:overmonitordc@cluster0.cxdzo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        );
        console.log('MongoDB Atlas Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`.magenta.underline);
    } catch (err) {
        console.log(err);
        process.exit(1); // exit with 1 for failure
    }
}

module.exports = connectDB;
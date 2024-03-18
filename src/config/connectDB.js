const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "";


const connectDB = async () => {
    try {
        const db = await mongoose.connect(MONGODB_URI);
        if (db.connection.readyState === db.STATES.connected) {
            console.log('db is connected, db name - ' + db.connection.db.databaseName);
        }
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = connectDB;
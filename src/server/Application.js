const app = require("../config/app");
const connectDB = require("../config/connectDB");


const PORT = process.env.PORT || 9000;
app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});


module.exports = app;
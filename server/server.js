const express = require('express');
const dotenv = require('dotenv');
const UserRoute = require('./routes/UserRoute');
dotenv.config();

// DB Connection 
require('./db')
const app = express();
app.use(express.json());
const port = process.env.PORT || 4001

// User Route
app.use('/api/users', UserRoute);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
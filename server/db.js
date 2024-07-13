const mongoose = require('mongoose')

const DB_URL = process.env.DATABASE_URL
mongoose.connect(DB_URL);
console.log('Connected to database');
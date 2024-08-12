require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./configs/dbConn');
const cors = require('cors'); 
const PORT = process.env.PORT || 3500;

app.use(cors()); 
app.use(express.json());
connectDB();

app.use('/api', require('./routes/tileRoutes'));

mongoose.connection.once('open', () => {
	//LESSON 3
	console.log('Connected to MongoDB');
	app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on('error', (err) => {
	console.log(err);
});
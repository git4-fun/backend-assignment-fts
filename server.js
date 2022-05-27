const express = require('express');
const mongoose = require('mongoose');

const app = express();
const routes = require('./routes/routes');
const connectDB = require('./config/connect');

const env = process.env.NODE_ENV || 'development'

if (env === 'development') {
	require('dotenv').config()
}

app.use(express.json());
app.use('/api', routes)

const PORT = process.env.PORT || 3000

async function start() {
	try {
		await connectDB(process.env.MONGO_URL);
		app.listen(PORT);
		console.log("Listening on", PORT);
	} catch (error) {
		console.log(error);
	}
};

start();
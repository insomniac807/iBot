const express = require('express');
const dotenv = require('dotenv').config();
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

app.use('/api/users', require('./routes/userRoutes'));

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
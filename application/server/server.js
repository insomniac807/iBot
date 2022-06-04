const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./database/db');
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 3000;

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const DISCORD_TOKEN_URL = 'https://discord.com/api/oauth2/token';
const CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
const DISCORD_OAUTH2_REDIRECT = 'http://127.0.0.1:3000/login';

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false }));

app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.get('/login', (req, res) => {
    if(req.query.code) {
        const params = new URLSearchParams();
        params.append('client_id', CLIENT_ID);
        params.append('client_secret', CLIENT_SECRET);
        params.append('grant_type', 'authorization_code');
        params.append('code', req.query.code);
        params.append('redirect_uri', DISCORD_OAUTH2_REDIRECT);
        fetch(DISCORD_TOKEN_URL ,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
        })
    }
    else {
        console.log("login success...");
        res.send("got it");
    }
});

app.get('/loginsuccess', (req, res) => {
    res.send(`logged in...`);
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});